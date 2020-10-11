"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfluxDBEssInfoDirectionImpl = void 0;
class InfluxDBEssInfoDirectionImpl {
    static getInfluxDB(essCommonInfo) {
        const influxElement = {
            measurement: "EssInfoDirection",
            fields: {
                is_direct_consuming_: parseInt(essCommonInfo.is_direct_consuming_),
                is_battery_charging_: parseInt(essCommonInfo.is_battery_charging_),
                is_battery_discharging_: parseInt(essCommonInfo.is_battery_discharging_),
                is_grid_selling_: parseInt(essCommonInfo.is_grid_selling_),
                is_grid_buying_: parseInt(essCommonInfo.is_grid_buying_),
                is_charging_from_grid_: parseInt(essCommonInfo.is_charging_from_grid_),
                is_discharging_to_grid_: parseInt(essCommonInfo.is_discharging_to_grid_),
            }
        };
        return influxElement;
    }
}
exports.InfluxDBEssInfoDirectionImpl = InfluxDBEssInfoDirectionImpl;
//# sourceMappingURL=InfluxDBEssInfoDirection.js.map