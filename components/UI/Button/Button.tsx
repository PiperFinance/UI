import { cva, VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
  'flex items-center justify-center px-4 py-2 rounded-md font-medium focus:outline-none font-sans text-sm w-1/2',
  {
    variants: {
      intent: {
        primary: 'bg-blue-500 text-tahiti',
        secondary: 'bg-gray-500 text-tahiti',
        danger: 'bg-red-500 text-white',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
);

type TButton = {
  children: JSX.Element | string;
};

export interface Props extends TButton, VariantProps<typeof buttonStyles> {}

export function Button({ intent, fullWidth, ...props }: Props) {
  return (
    <button className={buttonStyles({ intent, fullWidth })} {...props}></button>
  );
}
