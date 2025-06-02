import type { DeliveryModel } from "../../models/delivery/DeliveryModel";

export interface DeliveryRepository {
  findAll(): Promise<DeliveryModel[]>;
  findById(id: string): Promise<DeliveryModel>;
}
