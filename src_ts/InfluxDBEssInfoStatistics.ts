import { EssInfoStatistics } from "./EssInfo";
import { InfluxDBBatchElement } from "./InfluxDBBatchElement";

interface InfluxDBEEssInfoStatistics extends InfluxDBBatchElement {
    fields: {
        pcs_pv_total_power: number;
        batconv_power: number;
        load_power: number;
        ac_output_power: number;
        grid_power: number;
    }
}

class InfluxDBEssInfoStatisticsImpl {


    public static getInfluxDB(essCommonInfo: EssInfoStatistics): InfluxDBEEssInfoStatistics {
        const influxElement: InfluxDBEEssInfoStatistics = {
            measurement: "EssInfoStatistics",
            fields: {
                pcs_pv_total_power: parseFloat(essCommonInfo.pcs_pv_total_power),
                batconv_power: parseFloat(essCommonInfo.batconv_power),
                load_power: parseFloat(essCommonInfo.load_power),
                ac_output_power: parseFloat(essCommonInfo.ac_output_power),
                grid_power: parseFloat(essCommonInfo.grid_power),

            }
        }

        return influxElement;
    }
}

export { InfluxDBEssInfoStatisticsImpl, InfluxDBEEssInfoStatistics };