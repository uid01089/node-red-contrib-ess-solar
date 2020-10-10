interface EssSystemInfo {
    pms: EssSystemPms;
    batt: EssSystemBatt;
    version: EssSystemVersion;
}
interface EssSystemPms {
    model: string;
    serialno: string;
    ac_input_power: string;
    ac_output_power: string;
    install_date: string;
}
interface EssSystemBatt {
    capacity: string;
    install_date: string;
}
interface EssSystemVersion {
    pms_version: string;
    pms_build_date: string;
    pcs_version: string;
    bms_version: string;
    bms_unit1_version: string;
    bms_unit2_version: string;
}

export { EssSystemInfo };
