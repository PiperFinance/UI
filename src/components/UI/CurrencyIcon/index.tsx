import { chainIcon } from "@constants/networkList";
import { cva, VariantProps } from "class-variance-authority";
import Image, { ImageProps } from "next/image";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

const iconStyles = cva("relative", {
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
      {chainId &&
        chainIcon.map(
          (chain) =>
            chain.chainId === chainId && (
              <div className="absolute h-5 w-5 rounded-md bg-gray-1000 left-4 -top-2 border border-gray-600">
                <Image src={chain.icon} alt={""} fill/>
              </div>
            )
        )}
      <img {...props} />
    </div>
  );
}
