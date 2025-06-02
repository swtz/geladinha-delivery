import type { AddressModel } from "./AddressModel";
import type { OrderModel } from "./OrderModel";

export type DeliveryModel = {
  id: string;
  createdAt: string;
  status: "approved" | "dispatched" | "received" | "finished";
  deliveryMethod: "inShop" | "inHome";
  address: AddressModel[];
  paymentMethod: "money" | "PIX" | "card";
  orderItems: OrderModel[];
  subtotal: number;
  deliveryTax: number;
  total: number;
};
