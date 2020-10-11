import { EssInfoDirection } from "./EssInfo";
import { InfluxDBBatchElement } from "./InfluxDBBatchElement";

interface InfluxDBEEssInfoDirection extends InfluxDBBatchElement {
    fields: {
        is_direct_consuming_: boolean;
        is_battery_charging_: boolean;
        is_battery_discharging_: boolean;
        is_grid_selling_: boolean;
        is_grid_buying_: boolean;
        is_charging_from_grid_: boolean;
        is_discharging_to_grid_: boolean;
    }
}

class InfluxDBEssInfoDirectionImpl {


    public static getInfluxDB(essCommonInfo: EssInfoDirection): InfluxDBEEssInfoDirection {
        const influxElement: InfluxDBEEssInfoDirection = {
            measurement: "EssInfoDirection",
            fields: {
                is_direct_consuming_: (essCommonInfo.is_direct_consuming_ === '1'),
                is_battery_charging_: (essCommonInfo.is_battery_charging_ === '1'),
                is_battery_discharging_: (essCommonInfo.is_battery_discharging_ === '1'),
                is_grid_selling_: (essCommonInfo.is_grid_selling_ === '1'),
                is_grid_buying_: (essCommonInfo.is_grid_buying_ === '1'),
                is_charging_from_grid_: (essCommonInfo.is_charging_from_grid_ === '1'),
                is_discharging_to_grid_: (essCommonInfo.is_discharging_to_grid_ === '1'),

            }
        }

        return influxElement;
    }
}

export { InfluxDBEssInfoDirectionImpl, InfluxDBEEssInfoDirection };