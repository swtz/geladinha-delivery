import type { MotoboyModel } from "../../models/motoboy/MotoboyModel";
import { AddressCard } from "../AddressCard";
import { CurrencyValue } from "../CurrencyValue";
import type { DeliveryCardProps } from "../DeliveryCard";
import { Heading } from "../Heading";

type DeliveryProps = {
  motoboy: MotoboyModel;
} & DeliveryCardProps;

export function Delivery({ delivery, customer, motoboy }: DeliveryProps) {
  return (
    <div>
      <div>
        <Heading>Cliente</Heading>
        <p>Nome: {customer.name}</p>
        <p>Telefone: {customer.phone}</p>
      </div>

      <div>
        <Heading>Motoboy</Heading>
        <p>Nome: {motoboy.name}</p>
        <p>Telefone: {motoboy.phone}</p>
        <p>Moto: {motoboy.motorcycle}</p>
      </div>

      <div>
        <Heading>Dados da entrega</Heading>
        <p>Identificador: {delivery.id}</p>

        <div>
          <Heading>Pagamento</Heading>
          <p>{delivery.paymentMethod}</p>
          <CurrencyValue value={delivery.deliveryTax} />
          <CurrencyValue value={delivery.subtotal} />
          <CurrencyValue value={delivery.total} />
        </div>

        <AddressCard address={delivery.address} />

        <div>
          <Heading as="h3">Mapa:</Heading>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3484.538693206355!2d-49.58501692448007!3d-29.14879397538677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDA4JzU1LjciUyA0OcKwMzQnNTYuOCJX!5e0!3m2!1spt-BR!2sbr!4v1749234024410!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
