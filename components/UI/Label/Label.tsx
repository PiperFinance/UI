import React from 'react';

type TLabel = {
  children: JSX.Element | string;
  bgColor?: string;
};

export interface Props extends TLabel {}

const Label = ({ children, bgColor }: Props) => {
  console.log(bgColor);
  return (
    <span
      className="w-16 h-6 text-[11px] capitalize rounded-3xl flex items-center justify-center mr-2 dark:text-gray-50"
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </span>
  );
};

export default Label;
