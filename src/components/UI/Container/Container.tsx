type TContainer = {
  customStyle?: string;
};

export interface Props
  extends TContainer,
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {}

const Container = ({ children, customStyle, ...props }: Props) => {
  return (
    <section
      {...props}
      className={`flex min-h-fit w-full max-w-screen px-3 ${customStyle}`}
    >
      {children}
    </section>
  );
};

export default Container;
