import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className={clsx("max-w-6xl mx-auto")}>
      <div className="mb-8 mx-8">{children}</div>
    </div>
  );
}
