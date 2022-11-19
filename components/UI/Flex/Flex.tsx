import { ReactNode } from 'react';

type TFlexDirection =
  | 'flex-row'
  | 'flex-row-reverse'
  | 'flex-col'
  | 'flex-col-reverse';

type TFlex = {
  direction?: TFlexDirection;
  position?: string;
  children: ReactNode;
  style?: string;
};

const Flex = ({ children, direction, position, style }: TFlex) => {
  return (
    <div
      className={`w-full flex ${direction} ${position} ${style}`}
    >
      {children}
    </div>
  );
};

export default Flex;
