import clsx from "clsx";
import { DeliveryCard } from "../DeliveryCard";

export function DeliveryCardList() {
  const cardsArray = Array.from({ length: 10 });

  return (
    <div
      className={clsx(
        "flex",
        "flex-wrap",
        "gap-4",
        "justify-center",
        "xlg:justify-start",
        "mt-24"
      )}
    >
      {cardsArray.map((_) => {
        return <DeliveryCard />;
      })}
    </div>
  );
}
