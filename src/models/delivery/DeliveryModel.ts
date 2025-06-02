import type { AddressModel } from "./AddressModel";
import type { OrderModel } from "./OrderModel";

export type DeliveryModel = {
  id: string;
  createdAt: string;
  status: string;
  deliveryMethod: string;
  address: AddressModel[];
  paymentMethod: string;
  orderItems: OrderModel[];
  subtotal: number;
  deliveryTax: number;
  total: number;
};
