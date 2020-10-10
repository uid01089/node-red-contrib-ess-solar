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
                pv1_voltage: parseFloat(essCommonInfo.pv1_voltage),
                pv2_voltage: parseFloat(essCommonInfo.pv2_voltage),
                pv1_power: parseFloat(essCommonInfo.pv1_power),
                pv2_power: parseFloat(essCommonInfo.pv2_power),
                pv1_current: parseFloat(essCommonInfo.pv1_current),
                pv2_current: parseFloat(essCommonInfo.pv2_current),
            }
        }

        return influxElement;
    }
}

export { InfluxDBEssCommonInfoPVImpl, InfluxDBEssCommonInfoPV };