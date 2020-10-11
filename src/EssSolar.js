"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EssSolar = void 0;
require("node-fetch");
const InfluxDBEssCommonInfo_1 = require("./InfluxDBEssCommonInfo");
const InfluxDBEssInfoStatistics_1 = require("./InfluxDBEssInfoStatistics");
const InfluxDBEssInfoDirection_1 = require("./InfluxDBEssInfoDirection");
const fetch = require("node-fetch");
//see https://github.com/gluap/pyess/blob/master/pyess/constants.py
class EssSolar {
    constructor(addr, passwd) {
        this.addr = addr;
        this.passwd = passwd;
        this.sessionKey = "";
    }
    readInData() {
        return __awaiter(this, void 0, void 0, function* () {
            const dbElements = [];
            const loginSuccessful = yield this.readAuthData();
            if (loginSuccessful) {
                const essInfo = yield this.readEssInfo();
                dbElements.push(InfluxDBEssInfoStatistics_1.InfluxDBEssInfoStatisticsImpl.getInfluxDB(essInfo.statistics));
                dbElements.push(InfluxDBEssInfoDirection_1.InfluxDBEssInfoDirectionImpl.getInfluxDB(essInfo.direction));
                const systemInfo = yield this.readEssSystemInfo();
                const battInfo = yield this.readEssBattInfo();
                const commonInfo = yield this.readEssCommonInfo();
                dbElements.push(InfluxDBEssCommonInfo_1.InfluxDBEssCommonInfoPVImpl.getInfluxDB(commonInfo.PV));
            }
            return dbElements;
        });
    }
    readAuthData() {
        return __awaiter(this, void 0, void 0, function* () {
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
            try {
                const response = yield fetch(`https://${this.addr}/v1/login`, {
                    method: 'PUT',
                    body: JSON.stringify({ password: this.passwd }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const myJson = yield response.json();
                this.sessionKey = myJson['auth_key'];
                const status = (myJson['status'] === 'success' ? true : false);
                return status;
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    readEssInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
            try {
                const response = yield fetch(`https://${this.addr}/v1/user/essinfo/home`, {
                    method: 'POST',
                    body: JSON.stringify({ auth_key: this.sessionKey }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const myJson = yield response.json();
                //const myJsonString = JSON.stringify(myJson);
                return myJson;
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    readEssSystemInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
            try {
                const response = yield fetch(`https://${this.addr}/v1/user/setting/systeminfo`, {
                    method: 'POST',
                    body: JSON.stringify({ auth_key: this.sessionKey }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const myJson = yield response.json();
                //const myJsonString = JSON.stringify(myJson);
                return myJson;
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    readEssBattInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
            try {
                const response = yield fetch(`https://${this.addr}/v1/user/setting/batt`, {
                    method: 'POST',
                    body: JSON.stringify({ auth_key: this.sessionKey }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const myJson = yield response.json();
                //const myJsonString = JSON.stringify(myJson);
                return myJson;
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    readEssCommonInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
            try {
                const response = yield fetch(`https://${this.addr}/v1/user/essinfo/common`, {
                    method: 'POST',
                    body: JSON.stringify({ auth_key: this.sessionKey }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const myJson = yield response.json();
                //const myJsonString = JSON.stringify(myJson);
                return myJson;
            }
            catch (e) {
                console.error(e);
            }
        });
    }
}
exports.EssSolar = EssSolar;
//# sourceMappingURL=EssSolar.js.map