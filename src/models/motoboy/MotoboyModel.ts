import type { CustomerModel } from "../customer/CustomerModel";

export type MotoboyModel = {
  motorcycle: string;
} & CustomerModel;
