import type { HTMLAttributes } from "react";

export type TOverlayProps = HTMLAttributes<HTMLElement>;

export default function Overlay(props: TOverlayProps) {
  return (
    <>
      <div className="fixed top-0 left-0 z-[-1] h-full w-full" {...props} />
    </>
  );
}
