import Image, { ImageProps } from 'next/image';
import { cva, VariantProps } from 'class-variance-authority';

const avatarStyles = cva('inline-block h-6 w-6 rounded-full', {
  variants: {
    intent: {
      small: 'h-6 w-6',
      medium: 'h-8 w-8',
      large: 'h-10 w-10',
    },
  },
  defaultVariants: {
    intent: 'medium',
  },
});

export interface Props extends ImageProps, VariantProps<typeof avatarStyles> {}

export function Avatar({ intent, ...props }: Props) {
  return (
    <Image
      className={avatarStyles({ intent })}
      {...props}
      alt={props.alt}
      width={100}
      height={100}
    />
  );
}
