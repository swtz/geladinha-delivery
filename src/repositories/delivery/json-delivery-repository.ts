import type { DeliveryModel } from "../../models/delivery/DeliveryModel";
import type { DeliveryRepository } from "./delivery-repository";
import { readFile, writeFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_DELIVERIES_FILE_PATH = `${ROOT_DIR}/src/db/seed/deliveries.json`;

export class JsonDeliveryRepository implements DeliveryRepository {
  private async readFromDisk(): Promise<DeliveryModel[]> {
    const jsonContent = await readFile(JSON_DELIVERIES_FILE_PATH, "utf-8");
    const parsedJson = await JSON.parse(jsonContent);
    const { deliveries } = parsedJson;
    return deliveries;
  }

  private async writeToDisk(deliveries: DeliveryModel[]): Promise<void> {
    const jsonToString = JSON.stringify({ deliveries }, null, 2);
    await writeFile(JSON_DELIVERIES_FILE_PATH, jsonToString, "utf-8");
  }

  async findAll(): Promise<DeliveryModel[]> {
    const deliveries = await this.readFromDisk();
    return deliveries;
  }

  async findById(id: string): Promise<DeliveryModel> {
    const deliveries = await this.readFromDisk();
    const delivery = deliveries.find((delivery) => delivery.id === id);

    if (!delivery)
      throw new Error("Entrega não encontrada na base de dados JSON.");

    return delivery;
  }
}

// (async () => {
//   const object = new JsonDeliveryRepository();

//   console.log(await object.findById('ad67f575-62e8-4521-a1ce-7cc9b12ff80c'));
// })();
