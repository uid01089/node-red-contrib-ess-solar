"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfluxDBEssInfoDirectionImpl = void 0;
class InfluxDBEssInfoDirectionImpl {
    static getInfluxDB(essInfoDirection) {
        const influxElement = {
            measurement: "EssInfoDirection",
            fields: {
                is_direct_consuming_: parseInt(essInfoDirection.is_direct_consuming_),
                is_battery_charging_: parseInt(essInfoDirection.is_battery_charging_),
                is_battery_discharging_: parseInt(essInfoDirection.is_battery_discharging_),
                is_grid_selling_: parseInt(essInfoDirection.is_grid_selling_),
                is_grid_buying_: parseInt(essInfoDirection.is_grid_buying_),
                is_charging_from_grid_: parseInt(essInfoDirection.is_charging_from_grid_),
                is_discharging_to_grid_: parseInt(essInfoDirection.is_discharging_to_grid_),
            }
        };
        return influxElement;
    }
}
exports.InfluxDBEssInfoDirectionImpl = InfluxDBEssInfoDirectionImpl;
//# sourceMappingURL=InfluxDBEssInfoDirection.js.map