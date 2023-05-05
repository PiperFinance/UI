import { cva, VariantProps } from 'class-variance-authority';

const flexStyle = cva('flex', {
  variants: {
    width: {
      basisFit: 'basis-auto',
      basisHalf: 'basis-1/2',
      basisFull: 'basis-full',
      basis32: 'basis-32',
      auto: 'w-auto',
      fit: 'w-fit',
      half: 'w-1/2',
      full: 'w-full',
    },
    direction: {
      row: 'flex-row',
      rowReverse: 'flex-row-reverse',
      column: 'flex-col',
      columnReverse: 'flex-col-reverse',
    },
    alignItems: {
      center: 'items-center',
      start: 'items-start',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    justifyContent: {
      center: 'justify-center',
      between: 'justify-between',
      evenly: 'justify-evenly',
      around: 'justify-around',
      start: 'justify-start',
      end: 'justify-end',
      mdBetween: 'lg:justify-end justify-between',
    },
    wrap: {
      true: 'flex-wrap',
    },
    overflow: {
      hidden: 'overflow-hidden',
      xHidden: 'overflow-x-hidden',
      yHidden: 'overflow-y-hidden',
      auto: 'overflow-auto',
      xAuto: 'overflow-x-auto',
      yAuto: 'overflow-y-auto',
    },
  },
  defaultVariants: {
    direction: 'row',
    width: 'basisFull',
  },
});

type TFlex = {
  customStyle?: string;
};

export interface Props
  extends TFlex,
    VariantProps<typeof flexStyle>,
    React.ComponentProps<'div'> {}

const Flex = ({
  width,
  direction,
  alignItems,
  justifyContent,
  wrap,
  overflow,
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
        wrap,
        overflow,
      })} ${customStyle}`}
      {...props}
    ></div>
  );
};

export default Flex;
