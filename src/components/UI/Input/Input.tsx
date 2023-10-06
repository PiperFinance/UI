import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const inputStyles = cva(
  "h-10 w-full max-w-[400px] rounded-xl bg-transparent p-4  text-gray-50 focus:outline-none  placeholder:text-gray-400 font-medium",
  {
    variants: {
      border: {
        full: "border border-gray-500",
        bottom: "border-b border-gray-500",
        top: "border-t border-gray-500",
        none: "",
      },
      fontSize: {
        lg: "text-2xl",
        xl: "text-xl",
        sm: "text-sm",
      },
      fullWidth: {
        true: "max-w-full",
      },
    },
    defaultVariants: {
      border: "none",
      fontSize: "lg",
    },
  }
);

export interface Props
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    VariantProps<typeof inputStyles> {}

export default function Input({
  border,
  fontSize,
  fullWidth,
  ...props
}: Props) {
  return (
    <input
      className={inputStyles({ border, fontSize, fullWidth })}
      {...props}
    />
  );
}
