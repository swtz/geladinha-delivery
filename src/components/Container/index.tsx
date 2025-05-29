import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className={clsx("max-w-5xl mx-auto")}>
      <div className="m-8">{children}</div>
    </div>
  );
}
