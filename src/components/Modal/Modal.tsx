import Overlay from "@ui/Overlay";
import getPortalRoot from "@utils/getPortalRoot";
import { AnimatePresence, domMax, LazyMotion } from "framer-motion";
import React, { useRef } from "react";
import { createPortal } from "react-dom";
import { Inter } from "@next/font/google";

export interface ModalV2Props {
  isOpen?: boolean;
  onDismiss?: () => void;
  closeOnOverlayClick?: boolean;
  children?: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export function Modal({
  isOpen,
  onDismiss,
  closeOnOverlayClick,
  children,
  ...props
}: ModalV2Props) {
  const handleOverlayDismiss = () => {
    if (closeOnOverlayClick) {
      onDismiss?.();
    }
  };
  const portal = getPortalRoot();

  if (portal) {
    if (!isOpen) return null;
    return createPortal(
      <LazyMotion features={domMax}>
        <AnimatePresence>
          {isOpen && (
            <div
              className={`${inter.variable} font-sans fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center overflow-hidden bg-gray-999`}
              {...props}
            >
              {children}

              <Overlay onClick={handleOverlayDismiss} />
            </div>
          )}
        </AnimatePresence>
      </LazyMotion>,
      portal
    );
  }

  return null;
}
