import { cva, VariantProps } from 'class-variance-authority';
import Image, { ImageProps } from 'next/image';

const iconStyles = cva('relative rounded-full', {
  variants: {
    size: {
      sm: 'w-3 h-3',
      md: 'w-5 h-5',
      lg: 'w-7 h-7',
      xl: 'w-9 h-9',
    },
    borderRadius: {
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    size: 'md',
    borderRadius: 'full',
  },
});

type TIcon = {
  alt: string;
  src: string;
};

export interface Props extends TIcon, VariantProps<typeof iconStyles> {}

export function Button({ size, borderRadius, alt, src, ...props }: Props) {
  return (
    <div className={iconStyles({ size, borderRadius })}>
      <Image alt={alt} src={src} layout="fill" />
    </div>
  );
}
