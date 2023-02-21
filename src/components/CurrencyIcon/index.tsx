import { Chains } from "@constants/networkList";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import Image from "next/image";
import type { DetailedHTMLProps, ImgHTMLAttributes } from "react";

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
      {chainId &&
        Chains.map(
          (chain) =>
            chain.id === chainId && (
              <div
                key={chain.id}
                className="absolute left-5 -top-2 h-5 w-5 rounded-md border border-gray-600 bg-gray-1000"
              >
                <Image src={chain.icon ?? ""} alt={chain.name} fill className="rounded-md"/>
              </div>
            )
        )}
      <img {...props} />
    </div>
  );
}
