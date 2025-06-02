import type { AddressModel } from "../../models/delivery/AddressModel";
import { Heading } from "../Heading";

type AddressCardProps = {
  address: AddressModel[];
};

export function AddressCard({ address }: AddressCardProps) {
  return (
    <div>
      <Heading as="h3">Local da entrega:</Heading>
      <ul className="list-disc pl-8">
        <li>{`${address[0].street}, ${address[0].number}`}</li>
        <li>{address[0].complement}</li>
        <li>{address[0].referencePoint}</li>
        <li>{`${address[0].city} - ${address[0].stateCode}`}</li>
        <li>
          <a
            href={`https://maps.google.com.br/maps?q=
              ${address[0].location.split(",")[0]}
              %2C
              ${address[0].location.split(",")[1]}`}
            target="_blank"
          >
            {`${address[0].location}`}
          </a>
        </li>
      </ul>
    </div>
  );
}
