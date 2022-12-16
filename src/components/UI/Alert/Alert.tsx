import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const alertStyles = cva(
  "mb-4 flex w-full max-w-xs items-center rounded-lg p-4 shadow",
  {
    variants: {
      intent: {
        success: "bg-green-400 text-green-900",
        error: "bg-red-400 text-red-900",
        warning: "bg-wheat-500 text-gray-900",
        primary: "bg-primary-800 text-gray-200",
        info: "bg-primary-300 text-primary-900",
        secondary: "bg-gray-600 text-gray-200",
      },
    },
    defaultVariants: {
      intent: "info",
    },
  }
);

export interface Props
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    VariantProps<typeof alertStyles> {}

const Alert = ({ intent, ...props }: Props) => {
  return (
    <div id="toast-success" className={alertStyles({ intent })} role="alert">
      {props.children}
    </div>
  );
};

export default Alert;
