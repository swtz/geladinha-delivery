import clsx from "clsx";
import { DeliveryCard } from "../DeliveryCard";
import { deliveries } from "../../db/seed/deliveries.json";

export function DeliveryCardList() {
  // const cardsArray = Array.from({ length: 10 });

  return (
    <div
      className={clsx(
        "flex",
        "flex-wrap",
        "gap-4",
        "justify-center",
        "xlg:justify-start"
      )}
    >
      {deliveries.map((delivery) => {
        return <DeliveryCard delivery={delivery} />;
      })}
    </div>
  );
}
