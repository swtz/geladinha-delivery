import clsx from "clsx";
import { ItemMenu } from "../ItemMenu";

type MenuProps = {
  isActive: boolean;
  toggleDropdown: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export function Menu({ toggleDropdown, isActive }: MenuProps) {
  return (
    <nav
      className={clsx(
        "bg-orange-400 h-16 max-h-20",
        "fixed top-0 left-0 right-0 z-10",
        "text-white",
        "border-2 border-orange-500"
      )}
    >
      <ul className="flex gap-4 text-lg p-2 h-full items-center">
        <ItemMenu>Home</ItemMenu>
        <ItemMenu
          className={clsx(
            "relative",
            "hover:[&>ul]:block",
            "hover:[&>ul]:animate-dropdown",
            { "[&>ul]:block [&>ul]:animate-dropdown": isActive },
            "cursor-pointer"
          )}
          onClick={toggleDropdown}
        >
          Pedidos
          <ul
            className={clsx(
              "hidden",
              "absolute z-20",
              "top-[30px] p-4",
              "bg-orange-400 border-2 border-orange-500",
              "before:content-[''] before:absolute",
              "before:top-[-8px] before:left-0 before:w-0 before:h-0",
              "before:border-b-[8px]",
              "before:border-l-transparent before:border-l-[10px]",
              "before:border-r-transparent before:border-r-[10px]"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <li>
              <a href="#">Motoboy</a>
            </li>
            <li>
              <a href="#">Balcão</a>
            </li>
          </ul>
        </ItemMenu>
        <ItemMenu>Sobre nossa loja</ItemMenu>
        <ItemMenu>Contato</ItemMenu>
      </ul>
    </nav>
  );
}
