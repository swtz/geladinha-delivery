import type { AddressModel } from "../../models/delivery/AddressModel";
import { Heading } from "../Heading";

type AddressCardProps = {
  address: AddressModel[];
};

export function AddressCard({ address }: AddressCardProps) {
  return (
    <div>
      <Heading as="h3">Endereço de entrega:</Heading>
      <ul className="list-disc pl-8">
        <li>{address[0].street}</li>
        <li>{address[0].complement}</li>
        <li>{address[0].referencePoint}</li>
        <li>{`${address[0].city} - ${address[0].stateCode}`}</li>
      </ul>
    </div>
  );
}
