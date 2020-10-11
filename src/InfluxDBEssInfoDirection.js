"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfluxDBEssInfoDirectionImpl = void 0;
class InfluxDBEssInfoDirectionImpl {
    static getInfluxDB(essCommonInfo) {
        const influxElement = {
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
        };
        return influxElement;
    }
}
exports.InfluxDBEssInfoDirectionImpl = InfluxDBEssInfoDirectionImpl;
//# sourceMappingURL=InfluxDBEssInfoDirection.js.map