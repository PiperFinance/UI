type TFlexDirection =
  | "flex-row"
  | "flex-row-reverse"
  | "flex-col"
  | "flex-col-reverse";

type TFlex = {
  direction?: TFlexDirection;
  position?: string;
  customStyle?: string;
};

export interface Props
  extends TFlex,
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    > {}

const Flex = ({
  children,
  direction,
  position,
  customStyle,
  ...props
}: Props) => {
  return (
    <div
      {...props}
      className={`flex w-full ${direction} ${position} ${customStyle}`}
    >
      {children}
    </div>
  );
};

export default Flex;
