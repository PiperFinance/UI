import { cva, VariantProps } from "class-variance-authority";
import { DetailedHTMLProps, HTMLAttributes } from "react";

const buttonStyles = cva("flex items-center text-xs font-semibold rounded h-fit", {
  variants: {
    intent: {
      primary: "bg-primary-300 text-primary-800",
      secondary: " bg-gray-500  text-gray-50",
      danger: " bg-red-100  text-red-800 ",
      wheat: "bg-wheat-200 text-wheat-900 ",
      green: "bg-green-100 text-green-800",
    },
    fontSize: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
    },
    size: {
      sm: "px-2.5 py-0.5",
      md: "px-3 py-1 ",
    },
  },
  defaultVariants: {
    intent: "secondary",
    fontSize: "xs",
    size: "sm",
  },
});

export interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
    VariantProps<typeof buttonStyles> {}

export function Badge({ intent, fontSize, size, ...props }: Props) {
  return (
    <span
      className={buttonStyles({ intent, fontSize, size })}
      {...props}
    ></span>
  );
}
