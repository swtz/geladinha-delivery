import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
};

export function Heading({ children, as: Tag = "h2" }: HeadingProps) {
  const headingStyles = {
    h1: clsx("text-4xl font-extrabold"),
    h2: clsx("text-3xl font-bold"),
    h3: clsx("text-2xl font-medium"),
  };

  return (
    <Tag className={clsx(headingStyles[Tag], "text-lime-950")}>{children}</Tag>
  );
}
