import { EssBattInfo } from "./EssBattInfo";
import { EssCommonInfo } from "./EssCommonInfo";
import { EssInfo } from "./EssInfo";
import { EssSystemInfo } from "./EssSystemInfo";
import "node-fetch"
import { InfluxDBBatchElement } from "./InfluxDBBatchElement";
import { InfluxDBEssCommonInfoPVImpl } from "./InfluxDBEssCommonInfo";
const fetch = require("node-fetch");

//see https://github.com/gluap/pyess/blob/master/pyess/constants.py


class EssSolar {

    addr: string;
    passwd: string;
    sessionKey: string;

    constructor(addr: string, passwd: string) {
        this.addr = addr;
        this.passwd = passwd;
        this.sessionKey = "";

    }

    async readInData(): Promise<InfluxDBBatchElement[]> {

        const dbElements: InfluxDBBatchElement[] = [];

        const loginSuccessful = await this.readAuthData();
        if (loginSuccessful) {
            const essInfo = await this.readEssInfo();

            const systemInfo = await this.readEssSystemInfo();

            const battInfo = await this.readEssBattInfo();

            const commonInfo = await this.readEssCommonInfo();
            dbElements.push(InfluxDBEssCommonInfoPVImpl.getInfluxDB(commonInfo.PV));

            console.log();
        }

        return dbElements;

    }

    async readAuthData(): Promise<boolean> {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        try {
            const response = await fetch(`https://${this.addr}/v1/login`, {
                method: 'PUT',
                body: JSON.stringify({ password: this.passwd }), // string or object
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const myJson = await response.json();
            this.sessionKey = myJson['auth_key'] as string;

            const status = (myJson['status'] === 'success' ? true : false);

            return status;
        } catch (e) {
            console.error(e);
        }
    }

    async readEssInfo(): Promise<EssInfo> {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        try {
            const response = await fetch(`https://${this.addr}/v1/user/essinfo/home`, {
                method: 'POST',
                body: JSON.stringify({ auth_key: this.sessionKey }), // string or object
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const myJson = await response.json();
            //const myJsonString = JSON.stringify(myJson);
            return myJson;
        } catch (e) {
            console.error(e);
        }
    }

    async readEssSystemInfo(): Promise<EssSystemInfo> {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        try {
            const response = await fetch(`https://${this.addr}/v1/user/setting/systeminfo`, {
                method: 'POST',
                body: JSON.stringify({ auth_key: this.sessionKey }), // string or object
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const myJson = await response.json();
            //const myJsonString = JSON.stringify(myJson);
            return myJson;
        } catch (e) {
            console.error(e);
        }
    }

    async readEssBattInfo(): Promise<EssBattInfo> {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        try {
            const response = await fetch(`https://${this.addr}/v1/user/setting/batt`, {
                method: 'POST',
                body: JSON.stringify({ auth_key: this.sessionKey }), // string or object
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const myJson = await response.json();
            //const myJsonString = JSON.stringify(myJson);
            return myJson;
        } catch (e) {
            console.error(e);
        }
    }

    async readEssCommonInfo(): Promise<EssCommonInfo> {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        try {
            const response = await fetch(`https://${this.addr}/v1/user/essinfo/common`, {
                method: 'POST',
                body: JSON.stringify({ auth_key: this.sessionKey }), // string or object
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const myJson = await response.json();
            //const myJsonString = JSON.stringify(myJson);
            return myJson;
        } catch (e) {
            console.error(e);
        }
    }


}

export { EssSolar };