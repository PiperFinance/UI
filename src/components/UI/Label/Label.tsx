import React from "react";

type TLabel = {
  children: JSX.Element | string;
  bgColor?: string;
};

export type Props = TLabel;

const Label = ({ children, bgColor }: Props) => {
  return (
    <span
      className="mr-2 flex h-6 w-16 items-center justify-center rounded-3xl text-[11px] capitalize dark:text-gray-50"
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </span>
  );
};

export default Label;
