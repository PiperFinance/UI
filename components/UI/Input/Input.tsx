import { cva, VariantProps } from 'class-variance-authority';

const inputStyles = cva(
  'bg-inherit px-4 py-2  w-full font-medium focus:outline-none font-sans text-md border border-slate-500 rounded-md',
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

export interface Props
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    VariantProps<typeof inputStyles> {}

export function Input({ intent, fullWidth, ...props }: Props) {
  return <input className={inputStyles({ intent, fullWidth })} {...props} />;
}
