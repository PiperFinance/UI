import { newAllCustomChains } from "@constants/networkList";
import ChainIcon from "@ui/ChainIcon";
import { cva, VariantProps } from "class-variance-authority";
import Image, { ImageProps } from "next/image";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

const iconStyles = cva("relative bg-gray-100 rounded-full border-2", {
  variants: {
    size: {
      sm: "w-3 h-3",
      md: "w-5 h-5",
      lg: "w-7 h-7",
      xl: "w-9 h-9",
      xxl: "w-10 h-10 max-h-8",
    },
    borderRadius: {
      full: "rounded-full",
    },
  },
  defaultVariants: {
    size: "md",
    borderRadius: "full",
  },
});

type TCurrencyIcon = {
  chainId?: number;
};

export interface Props
  extends TCurrencyIcon,
    DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
    VariantProps<typeof iconStyles> {}

export function CurrencyIcon({ chainId, size, borderRadius, ...props }: Props) {
  return (
    <div className={iconStyles({ size, borderRadius })}>
      {chainId && <ChainIcon chainId={chainId} />}
      <img {...props} />
    </div>
  );
}
