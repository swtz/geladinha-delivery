import clsx from "clsx";
import { CurrencyValue } from "../CurrencyValue";
import { Heading } from "../Heading";
import type { CustomerModel } from "../../models/customer/CustomerModel";
import type { DeliveryModel } from "../../models/delivery/DeliveryModel";

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
      <div>
        <Heading as="h3">Endereço de entrega:</Heading>
        <ul className="list-disc pl-8">
          <li>{delivery.address[0].street}</li>
          <li>{delivery.address[0].complement}</li>
          <li>{delivery.address[0].referencePoint}</li>
          <li>{`${delivery.address[0].city} - ${delivery.address[0].stateCode}`}</li>
        </ul>
      </div>
      <div>
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
    </div>
  );
}
