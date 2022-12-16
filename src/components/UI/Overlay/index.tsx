import { FC, HTMLAttributes, useEffect } from "react";

export interface overlayProps extends HTMLAttributes<HTMLElement> {}

export const Overlay: FC<React.PropsWithChildren<overlayProps>> = (props) => {
  return (
    <>
      <div className="fixed top-0 left-0 z-[-1] h-full w-full" {...props} />
    </>
  );
};

export default Overlay;
