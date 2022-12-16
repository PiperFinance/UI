import { cva, VariantProps } from "class-variance-authority";

const flexStyle = cva("flex", {
  variants: {
    width: {
      basisFit: "basis-auto",
      basisHalf: "basis-1/2",
      basisFull: "basis-full",
      basis32: "basis-32",
      fit: "w-auto",
      half: "w-1/2",
      full: "w-full",
    },
    direction: {
      row: "flex-row",
      rowReverse: "flex-row-reverse",
      column: "flex-col",
      columnReverse: "flex-col-reverse",
    },
    alignItems: {
      center: "items-center",
      start: "items-start",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    justifyContent: {
      center: "justify-center",
      between: "justify-between",
      evenly: "justify-evenly",
      around: "justify-around",
      start: "justify-start",
      end: "justify-end",
    },
  },
  defaultVariants: {
    direction: "row",
    width: "basisFull",
  },
});

type TFlex = {
  customStyle?: string;
};

export interface Props
  extends TFlex,
    VariantProps<typeof flexStyle>,
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    > {}

const Flex = ({
  width,
  direction,
  alignItems,
  justifyContent,
  customStyle,
  ...props
}: Props) => {
  return (
    <div
      className={`${flexStyle({
        width,
        direction,
        alignItems,
        justifyContent,
      })} ${customStyle}`}
      {...props}
    ></div>
  );
};

export default Flex;
