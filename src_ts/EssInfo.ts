


interface EssInfo {
    statistics: EssInfoStatistics;
    direction: EssInfoDirection;
    operation: EssInfoOperation;
    wintermode: EssInfoWintermode;
    backupmode: string;
    pcs_fault: EssInfoPcsFault;
    heatpump: EssInfoHeatpump;
    evcharger: EssInfoEvcharger;
    gridWaitingTime: string;
}

interface EssInfoStatistics {
    pcs_pv_total_power: string;
    batconv_power: string;
    bat_use: string;
    bat_status: string;
    bat_user_soc: string;
    load_power: string;
    ac_output_power: string;
    load_today: string;
    grid_power: string;
    current_day_self_consumption: string;
    current_pv_generation_sum: string;
    current_grid_feed_in_energy: string;
}
interface EssInfoDirection {
    is_direct_consuming_: string;
    is_battery_charging_: string;
    is_battery_discharging_: string;
    is_grid_selling_: string;
    is_grid_buying_: string;
    is_charging_from_grid_: string;
    is_discharging_to_grid_: string;
}
interface EssInfoOperation {
    status: string;
    mode: string;
    pcs_standbymode: string;
}
interface EssInfoWintermode {
    winter_status: string;
    backup_status: string;
}
interface EssInfoPcsFault {
    pcs_status: string;
    pcs_op_status: string;
}
interface EssInfoHeatpump {
    heatpump_protocol: string;
    heatpump_activate: string;
    current_temp: string;
    heatpump_working: string;
}
interface EssInfoEvcharger {
    ev_activate: string;
    ev_power: string;
}


export { EssInfo };

