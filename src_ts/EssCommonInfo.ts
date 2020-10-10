interface EssCommonInfo {
    PV: EssCommonInfoPV;
    BATT: EssCommonInfoBATT;
    GRID: EssCommonInfoGRID;
    LOAD: EssCommonInfoLOAD;
    PCS: EssCommonInfoPCS;
}
interface EssCommonInfoPV {
    brand: string;
    capacity: number;
    pv1_voltage: number;
    pv2_voltage: number;
    pv3_voltage: number;
    pv1_power: number;
    pv2_power: number;
    pv3_power: number;
    pv1_current: number;
    pv2_current: number;
    pv3_current: number;
    today_pv_generation_sum: number;
    today_month_pv_generation_sum: number;
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
