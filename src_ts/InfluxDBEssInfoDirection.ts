import { EssInfoDirection } from "./EssInfo";
import { InfluxDBBatchElement } from "./InfluxDBBatchElement";

interface InfluxDBEEssInfoDirection extends InfluxDBBatchElement {
    fields: {
        is_direct_consuming_: number;
        is_battery_charging_: number;
        is_battery_discharging_: number;
        is_grid_selling_: number;
        is_grid_buying_: number;
        is_charging_from_grid_: number;
        is_discharging_to_grid_: number;
    }
}

class InfluxDBEssInfoDirectionImpl {


    public static getInfluxDB(essInfoDirection: EssInfoDirection): InfluxDBEEssInfoDirection {
        const influxElement: InfluxDBEEssInfoDirection = {
            measurement: "EssInfoDirection",
            fields: {
                is_direct_consuming_: parseInt(essInfoDirection.is_direct_consuming_),
                is_battery_charging_: parseInt(essInfoDirection.is_battery_charging_),
                is_battery_discharging_: parseInt(essInfoDirection.is_battery_discharging_),
                is_grid_selling_: parseInt(essInfoDirection.is_grid_selling_),
                is_grid_buying_: parseInt(essInfoDirection.is_grid_buying_),
                is_charging_from_grid_: parseInt(essInfoDirection.is_charging_from_grid_),
                is_discharging_to_grid_: parseInt(essInfoDirection.is_discharging_to_grid_),

            }
        }

        return influxElement;
    }
}

export { InfluxDBEssInfoDirectionImpl, InfluxDBEEssInfoDirection };