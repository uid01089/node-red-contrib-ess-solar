import { EssInfoDirection, EssInfoStatistics } from "./EssInfo";
import { InfluxDBBatchElement } from "./InfluxDBBatchElement";

interface InfluxDBEEssInfoStatistics extends InfluxDBBatchElement {
    fields: {
        pcs_pv_total_power: number;
        batconv_power: number;
        load_power: number;
        grid_power: number;
    }
}

class InfluxDBEssInfoStatisticsImpl {


    public static getInfluxDB(essCommonInfo: EssInfoStatistics, essInfoDirection: EssInfoDirection): InfluxDBEEssInfoStatistics {

        const isBatteryCharing = (essInfoDirection.is_battery_charging_ === '1');
        const is_charging_from_grid_ = (essInfoDirection.is_charging_from_grid_ === '1');
        const isGridBuying = (essInfoDirection.is_grid_buying_ === '1');


        const influxElement: InfluxDBEEssInfoStatistics = {
            measurement: "EssInfoStatistics",
            fields: {
                pcs_pv_total_power: parseFloat(essCommonInfo.pcs_pv_total_power),
                batconv_power: parseFloat(essCommonInfo.batconv_power) * (isBatteryCharing || is_charging_from_grid_ ? -1 : +1),
                load_power: parseFloat(essCommonInfo.load_power) * (-1), //Load is always negative
                grid_power: parseFloat(essCommonInfo.grid_power) * (isGridBuying ? +1 : -1),

            }
        }

        return influxElement;
    }
}

export { InfluxDBEssInfoStatisticsImpl, InfluxDBEEssInfoStatistics };