import clsx from "clsx";

type ItemMenu = React.ComponentProps<"li">;

export function ItemMenu({ children, ...props }: ItemMenu) {
  return (
    <li className={clsx("border-2 rounded-lg px-2", props.className)}>
      {children}
    </li>
  );
}
