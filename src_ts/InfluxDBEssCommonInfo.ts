import { EssCommonInfoPV } from "./EssCommonInfo";
import { InfluxDBBatchElement } from "./InfluxDBBatchElement";

interface InfluxDBEssCommonInfoPV extends InfluxDBBatchElement {
    fields: {
        pv1_voltage: number;
        pv2_voltage: number;
        pv1_power: number;
        pv2_power: number;
        pv1_current: number;
        pv2_current: number;
    }
}

class InfluxDBEssCommonInfoPVImpl {


    public static getInfluxDB(essCommonInfo: EssCommonInfoPV): InfluxDBEssCommonInfoPV {
        const influxElement: InfluxDBEssCommonInfoPV = {
            measurement: "EssCommonInfoPV",
            fields: {
                pv1_voltage: essCommonInfo.pv1_voltage,
                pv2_voltage: essCommonInfo.pv2_voltage,
                pv1_power: essCommonInfo.pv1_power,
                pv2_power: essCommonInfo.pv2_power,
                pv1_current: essCommonInfo.pv1_current,
                pv2_current: essCommonInfo.pv2_current,
            }
        }

        return influxElement;
    }
}

export { InfluxDBEssCommonInfoPVImpl, InfluxDBEssCommonInfoPV };