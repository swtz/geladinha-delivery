import clsx from "clsx";

type FooterProps = {
  children: React.ReactNode;
};

export function Footer({ children }: FooterProps) {
  return (
    <footer
      className={clsx(
        "flex justify-center items-center gap-1",
        "w-full",
        "text-lg",
        "bg-orange-400 h-16 max-h-20",
        "text-white",
        "border-2 border-orange-500"
      )}
    >
      {children}
    </footer>
  );
}
