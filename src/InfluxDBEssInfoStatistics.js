"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfluxDBEssInfoStatisticsImpl = void 0;
class InfluxDBEssInfoStatisticsImpl {
    static getInfluxDB(essCommonInfo) {
        const influxElement = {
            measurement: "EssInfoStatistics",
            fields: {
                pcs_pv_total_power: parseFloat(essCommonInfo.pcs_pv_total_power),
                batconv_power: parseFloat(essCommonInfo.batconv_power),
                load_power: parseFloat(essCommonInfo.load_power),
                ac_output_power: parseFloat(essCommonInfo.ac_output_power),
                grid_power: parseFloat(essCommonInfo.grid_power),
            }
        };
        return influxElement;
    }
}
exports.InfluxDBEssInfoStatisticsImpl = InfluxDBEssInfoStatisticsImpl;
//# sourceMappingURL=InfluxDBEssInfoStatistics.js.map