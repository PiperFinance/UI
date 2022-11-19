const containerStyles = 'p-5 w-full';

type TContainer = {
  children: JSX.Element | JSX.Element[];
  style?: string;
};

export interface Props extends TContainer {}

export function Container({ ...props }: Props) {
  const { children, style } = props;
  return (
    <section className={`${containerStyles} ${style}`}>{children}</section>
  );
}
