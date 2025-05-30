import clsx from "clsx";
import { ItemMenu } from "../ItemMenu";

export function Menu() {
  return (
    <nav
      className={clsx(
        "bg-orange-400 h-16 max-h-20",
        "fixed top-0 left-0 right-0 z-50",
        "text-white",
        "border-2 border-orange-500"
      )}
    >
      <ul className="flex gap-4 text-lg p-2 h-full items-center">
        <ItemMenu>Home</ItemMenu>
        <ItemMenu>
          Pedidos
          <ul className="hidden">
            <li>Motoboy</li>
            <li>Balcão</li>
          </ul>
        </ItemMenu>
        <ItemMenu>Sobre nossa loja</ItemMenu>
        <ItemMenu>Contato</ItemMenu>
      </ul>
    </nav>
  );
}
