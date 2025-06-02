import clsx from "clsx";
import { CurrencyValue } from "../CurrencyValue";
import { Heading } from "../Heading";
import type { CustomerModel } from "../../models/customer/CustomerModel";
import type { DeliveryModel } from "../../models/delivery/DeliveryModel";
import { AddressCard } from "../AddressCard";

type DeliveryCardProps = {
  delivery: DeliveryModel;
  customer: CustomerModel;
};

export function DeliveryCard({ delivery, customer }: DeliveryCardProps) {
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
      title={`informações sobre a entrega ${delivery.id}`}
      aria-label={`informações sobre a entrega ${delivery.id}`}
    >
      <div>
        <Heading as="h3">Cliente:</Heading>
        <h2 className="text-xl">{customer.name}</h2>
        <span className="italic text-slate-900">{delivery.createdAt}</span>
        <p className="text-lg">
          Tipo de entrega: <b>{delivery.deliveryMethod}</b>
        </p>
      </div>

      <AddressCard address={delivery.address} />

      <Heading as="h3">Pagamento:</Heading>
      <p>
        Método de pagamento: <b>{delivery.paymentMethod}</b>
      </p>
      <p>
        Subtotal: <CurrencyValue value={delivery.subtotal} />
      </p>
      <p>
        Taxa de entrega: <CurrencyValue value={delivery.deliveryTax} />
      </p>
      <p>
        Total: <CurrencyValue value={delivery.total} />
      </p>
    </div>
  );
}
