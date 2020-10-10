interface EssCommonInfo {
    PV: EssCommonInfoPV;
    BATT: EssCommonInfoBATT;
    GRID: EssCommonInfoGRID;
    LOAD: EssCommonInfoLOAD;
    PCS: EssCommonInfoPCS;
}
interface EssCommonInfoPV {
    brand: string;
    capacity: string;
    pv1_voltage: string;
    pv2_voltage: string;
    pv3_voltage: string;
    pv1_power: string;
    pv2_power: string;
    pv3_power: string;
    pv1_current: string;
    pv2_current: string;
    pv3_current: string;
    today_pv_generation_sum: string;
    today_month_pv_generation_sum: string;
}
interface EssCommonInfoBATT {
    status: string;
    soc: string;
    dc_power: string;
    winter_setting: string;
    winter_status: string;
    safety_soc: string;
    backup_setting: string;
    backup_status: string;
    backup_soc: string;
    today_batt_discharge_enery: string;
    today_batt_charge_energy: string;
    month_batt_charge_energy: string;
    month_batt_discharge_energy: string;
}
interface EssCommonInfoGRID {
    active_power: string;
    a_phase: string;
    freq: string;
    today_grid_feed_in_energy: string;
    today_grid_power_purchase_energy: string;
    month_grid_feed_in_energy: string;
    month_grid_power_purchase_energy: string;
}
interface EssCommonInfoLOAD {
    load_power: string;
    today_load_consumption_sum: string;
    today_pv_direct_consumption_enegy: string;
    today_batt_discharge_enery: string;
    today_grid_power_purchase_energy: string;
    month_load_consumption_sum: string;
    month_pv_direct_consumption_energy: string;
    month_batt_discharge_energy: string;
    month_grid_power_purchase_energy: string;
}
interface EssCommonInfoPCS {
    today_self_consumption: string;
    month_co2_reduction_accum: string;
    today_pv_generation_sum: string;
    month_pv_generation_sum: string;
    today_grid_feed_in_energy: string;
    month_grid_feed_in_energy: string;
    pcs_stauts: string;
    feed_in_limitation: string;
    operation_mode: string;
}

export { EssCommonInfo, EssCommonInfoPV };
