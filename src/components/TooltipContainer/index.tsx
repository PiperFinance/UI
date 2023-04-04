import getPortalRoot from '@utils/getPortalRoot';
import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ITooltip } from './types';

const Tooltip = ({ children, tooltip, position }: ITooltip) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const portal = getPortalRoot();

  return (
    <div
      ref={tooltipRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && portal
        ? createPortal(
            <span
              ref={tooltipRef}
              className={`z-50 transition bg-gray-500 text-white px-2 py-1 text-2xl rounded-xl absolute -translate-x-1/2 ${position}-full whitespace-nowrap w-fit mt-2 max-w-[320px]`}
            >
              {tooltip}
            </span>,
            portal
          )
        : null}
    </div>
  );
};

export default Tooltip;
