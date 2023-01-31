import getPortalRoot from '@utils/getPortalRoot';
import isTouchDevice from '@utils/isTouchDevice';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  motion,
  Variants,
} from 'framer-motion';
import { TooltipOptions, TooltipRefs } from './types';

const animationMap = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
};

const animationVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function useTooltip(
  content: React.ReactNode,
  options: TooltipOptions
): TooltipRefs {
  const {
    placement = 'auto',
    trigger = 'hover',
    arrowPadding = 16,
    tooltipPadding = { left: 16, right: 16 },
    tooltipOffset = [0, 10],
    hideTimeout = 100,
  } = options;

  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);
  const [tooltipElement, setTooltipElement] = useState<HTMLElement | null>(
    null
  );
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);

  const [visible, setVisible] = useState(false);
  const isHoveringOverTooltip = useRef(false);
  const hideTimeoutRef = useRef<number>();

  const hideTooltip = useCallback(
    (e: Event) => {
      const hide = () => {
        e.stopPropagation();
        e.preventDefault();
        setVisible(false);
      };

      if (trigger === 'hover') {
        if (hideTimeoutRef.current) {
          window.clearTimeout(hideTimeoutRef.current);
        }
        if (e.target === tooltipElement) {
          isHoveringOverTooltip.current = false;
        }
        if (!isHoveringOverTooltip.current) {
          hideTimeoutRef.current = window.setTimeout(() => {
            if (!isHoveringOverTooltip.current) {
              hide();
            }
          }, hideTimeout);
        }
      } else {
        hide();
      }
    },
    [tooltipElement, trigger, hideTimeout]
  );

  const showTooltip = useCallback(
    (e: Event) => {
      e.stopPropagation();
      e.preventDefault();
      setVisible(true);
      if (trigger === 'hover') {
        if (e.target === targetElement) {
          // If we were about to close the tooltip and got back to it
          // then prevent closing it.
          clearTimeout(hideTimeoutRef.current);
        }
        if (e.target === tooltipElement) {
          isHoveringOverTooltip.current = true;
        }
      }
    },
    [tooltipElement, targetElement, trigger]
  );

  const toggleTooltip = useCallback(
    (e: Event) => {
      e.stopPropagation();
      setVisible(!visible);
    },
    [visible]
  );

  // Trigger = hover
  useEffect(() => {
    if (targetElement === null || trigger !== 'hover') return undefined;

    if (isTouchDevice()) {
      targetElement.addEventListener('touchstart', showTooltip);
      targetElement.addEventListener('touchend', hideTooltip);
    } else {
      targetElement.addEventListener('mouseenter', showTooltip);
      targetElement.addEventListener('mouseleave', hideTooltip);
    }
    return () => {
      targetElement.removeEventListener('touchstart', showTooltip);
      targetElement.removeEventListener('touchend', hideTooltip);
      targetElement.removeEventListener('mouseenter', showTooltip);
      targetElement.removeEventListener('mouseleave', showTooltip);
    };
  }, [trigger, targetElement, hideTooltip, showTooltip]);

  // Keep tooltip open when cursor moves from the targetElement to the tooltip
  useEffect(() => {
    if (tooltipElement === null || trigger !== 'hover') return undefined;

    tooltipElement.addEventListener('mouseenter', showTooltip);
    tooltipElement.addEventListener('mouseleave', hideTooltip);
    return () => {
      tooltipElement.removeEventListener('mouseenter', showTooltip);
      tooltipElement.removeEventListener('mouseleave', hideTooltip);
    };
  }, [trigger, tooltipElement, hideTooltip, showTooltip]);

  // Trigger = click
  useEffect(() => {
    if (targetElement === null || trigger !== 'click') return undefined;

    targetElement.addEventListener('click', toggleTooltip);

    return () => targetElement.removeEventListener('click', toggleTooltip);
  }, [trigger, targetElement, visible, toggleTooltip]);

  // Handle click outside
  useEffect(() => {
    if (trigger !== 'click') return undefined;

    const handleClickOutside = ({ target }: Event) => {
      if (target instanceof Node) {
        if (
          tooltipElement != null &&
          targetElement != null &&
          !tooltipElement.contains(target) &&
          !targetElement.contains(target)
        ) {
          setVisible(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [trigger, targetElement, tooltipElement]);

  // Trigger = focus
  useEffect(() => {
    if (targetElement === null || trigger !== 'focus') return undefined;

    targetElement.addEventListener('focus', showTooltip);
    targetElement.addEventListener('blur', hideTooltip);
    return () => {
      targetElement.removeEventListener('focus', showTooltip);
      targetElement.removeEventListener('blur', hideTooltip);
    };
  }, [trigger, targetElement, showTooltip, hideTooltip]);

  const { styles, attributes } = usePopper(targetElement, tooltipElement, {
    placement,
    modifiers: [
      {
        name: 'arrow',
        options: { element: arrowElement, padding: arrowPadding },
      },
      { name: 'offset', options: { offset: tooltipOffset } },
      { name: 'preventOverflow', options: { padding: tooltipPadding } },
    ],
  });

  const tooltip = (
    <motion.div
      ref={setTooltipElement}
      style={styles.popper}
      {...attributes.popper}
      {...animationMap}
      transition={{ duration: 0.3 }}
      variants={animationVariants}
      className="z-50 bg-gray-500 text-white px-3 py-2 text-sm rounded-xl -mt-2 -translate-x-1/2  w-fit max-w-[320px] capitalize"
    >
      {content}
      <div
        ref={setArrowElement}
        style={styles.arrow}
        className="absolute z-minus-1"
      ></div>
    </motion.div>
  );

  const AnimatedTooltip = (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>{visible && tooltip}</AnimatePresence>
    </LazyMotion>
  );

  const portal = getPortalRoot();

  const tooltipInPortal = portal ? createPortal(AnimatedTooltip, portal) : null;

  return {
    targetRef: setTargetElement,
    tooltip: tooltipInPortal ?? AnimatedTooltip,
    tooltipVisible: visible,
  };
}

export default useTooltip;
