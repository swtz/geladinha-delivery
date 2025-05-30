import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3";
} & React.ComponentProps<"h1">;

export function Heading({ children, as: Tag = "h2", ...props }: HeadingProps) {
  const headingStyles = {
    h1: clsx("text-4xl font-extrabold"),
    h2: clsx("text-3xl font-bold"),
    h3: clsx("text-2xl font-medium"),
  };

  return (
    <Tag
      {...props}
      className={clsx(headingStyles[Tag], "text-lime-950", props.className)}
    >
      {children}
    </Tag>
  );
}
