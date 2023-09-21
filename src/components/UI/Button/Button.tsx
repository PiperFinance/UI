import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const buttonStyles = cva(
  "text-center my-5 px-4 py-2 rounded-2xl font-medium focus:outline-none transition",
  {
    variants: {
      intent: {
        primary:
          "border border-primary-500 hover:bg-primary-700 text-primary-700 hover:text-gray-50",
        secondary:
          "border border-gray-500 hover:bg-gray-500 text-gray-500 hover:text-gray-50",
        danger:
          "border border-red-500 hover:bg-red-700 text-red-700 hover:text-gray-50",
        wheat:
          "border border-gray-500 hover:border-none hover:shadow-hover text-gray-50 font-semibold hover:text-wheat-500",
        disablePrimary: "bg-primary-700 text-gray-100 hover:text-gray-50",
      },
      width: {
        xs: "w-16",
        sm: "w-40",
        80: "w-4/5",
        half: "w-1/2",
        full: "w-full",
      },
      height: {
        sm: "h-10",
        md: "h-14",
        lg: "h-16",
      },
      fontSize: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
      disable: {
        true: "opacity-70 pointer-events-none select-none",
      },
    },
    defaultVariants: {
      height: "md",
      width: "half",
      fontSize: "md",
      intent: "primary",
    },
  }
);

export interface Props
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    VariantProps<typeof buttonStyles> {}

export function Button({ disable, intent, width, height, ...props }: Props) {
  return (
    <button
      className={buttonStyles({ intent, width, height, disable })}
      {...props}
    >
      {props.children}
    </button>
  );
}
