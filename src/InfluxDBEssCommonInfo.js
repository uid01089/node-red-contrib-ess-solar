"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfluxDBEssCommonInfoPVImpl = void 0;
class InfluxDBEssCommonInfoPVImpl {
    static getInfluxDB(essCommonInfo) {
        const influxElement = {
            measurement: "EssCommonInfoPV",
            fields: {
                pv1_voltage: essCommonInfo.pv1_voltage,
                pv2_voltage: essCommonInfo.pv2_voltage,
                pv1_power: essCommonInfo.pv1_power,
                pv2_power: essCommonInfo.pv2_power,
                pv1_current: essCommonInfo.pv1_current,
                pv2_current: essCommonInfo.pv2_current,
            }
        };
        return influxElement;
    }
}
exports.InfluxDBEssCommonInfoPVImpl = InfluxDBEssCommonInfoPVImpl;
//# sourceMappingURL=InfluxDBEssCommonInfo.js.map