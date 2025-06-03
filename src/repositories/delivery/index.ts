import type { DeliveryRepository } from "./delivery-repository";
import { JsonDeliveryRepository } from "./json-delivery-repository";

export const deliveryRepository: DeliveryRepository =
  new JsonDeliveryRepository();
