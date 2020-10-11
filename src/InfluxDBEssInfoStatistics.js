"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfluxDBEssInfoStatisticsImpl = void 0;
class InfluxDBEssInfoStatisticsImpl {
    static getInfluxDB(essCommonInfo, essInfoDirection) {
        const isBatteryCharing = (essInfoDirection.is_battery_charging_ === '1');
        const is_charging_from_grid_ = (essInfoDirection.is_charging_from_grid_ === '1');
        const isGridBuying = (essInfoDirection.is_grid_buying_ === '1');
        const influxElement = {
            measurement: "EssInfoStatistics",
            fields: {
                pcs_pv_total_power: parseFloat(essCommonInfo.pcs_pv_total_power),
                batconv_power: parseFloat(essCommonInfo.batconv_power) * (isBatteryCharing || is_charging_from_grid_ ? -1 : +1),
                load_power: parseFloat(essCommonInfo.load_power) * (-1),
                grid_power: parseFloat(essCommonInfo.grid_power) * (isGridBuying ? +1 : -1),
            }
        };
        return influxElement;
    }
}
exports.InfluxDBEssInfoStatisticsImpl = InfluxDBEssInfoStatisticsImpl;
//# sourceMappingURL=InfluxDBEssInfoStatistics.js.map