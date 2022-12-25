import getPortalRoot from "@utils/getPortalRoot";
import { AnimatePresence, domMax, LazyMotion } from "framer-motion";
import React from "react";
import { createPortal } from "react-dom";
import { Inter } from "@next/font/google";
import Overlay from "@ui/Overlay";

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
              className={`${inter.variable} fixed inset-0 flex items-center justify-center overflow-hidden bg-gray-999 font-sans`}
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
