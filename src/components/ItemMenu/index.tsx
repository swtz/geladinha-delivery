type ItemMenu = {
  children: React.ReactNode;
};

export function ItemMenu({ children }: ItemMenu) {
  return <li className="border-2 rounded-lg px-2">{children}</li>;
}
