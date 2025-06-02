import clsx from "clsx";
import { CurrencyValue } from "../CurrencyValue";
import { Heading } from "../Heading";
import type { CustomerModel } from "../../models/customer/CustomerModel";
import type { DeliveryModel } from "../../models/delivery/DeliveryModel";
import { AddressCard } from "../AddressCard";

type DeliveryCardProps = {
  delivery: DeliveryModel;
  customer?: CustomerModel;
};

export function DeliveryCard({ delivery }: DeliveryCardProps) {
  return (
    <div
      className={clsx(
        "max-w-sm p-4",
        "bg-orange-300 text-black",
        "rounded-lg",
        "border-2 border-orange-400",
        "cursor-pointer transition",
        "hover:brightness-110"
      )}
      title="informações sobre a entrega número 001"
      aria-label="informações sobre a entrega número 001"
    >
      <div>
        <Heading as="h3">Cliente:</Heading>
        <h2 className="text-xl">Lion Lurdes</h2>
        <span className="italic text-slate-900">
          Criado em 27/05/25 às 19:00
        </span>
        <p className="text-lg">
          Tipo de entrega: <b>{delivery.deliveryMethod}</b>
        </p>
      </div>

      <AddressCard address={delivery.address} />

      <Heading as="h3">Pagamento:</Heading>
      <p>
        Método de pagamento: <b>Cartão</b>
      </p>
      <p>
        Subtotal: <CurrencyValue value={89.0} />
      </p>
      <p>
        Taxa de entrega: <CurrencyValue value={2.0} />
      </p>
      <p>
        Total: <CurrencyValue value={91.0} />
      </p>
    </div>
  );
}
