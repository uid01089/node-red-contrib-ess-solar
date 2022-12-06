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
const EssSolar_1 = require("./EssSolar");
const func = (RED) => {
    const essSolar = function (config) {
        this.addr = config.addr;
        this.passwd = config.passwd;
        this.essSolar = new EssSolar_1.EssSolar(this.addr, this.passwd);
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const node = this;
        RED.nodes.createNode(node, config);
        /**
         * Nodes register a listener on the input event
         * to receive messages from the up-stream nodes in a flow.
        */
        node.on("input", function (msg, send, done) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    // For maximum backwards compatibility, check that send exists.
                    // If this node is installed in Node-RED 0.x, it will need to
                    // fallback to using `node.send`
                    // eslint-disable-next-line prefer-spread, prefer-rest-params
                    send = send || function () { node.send.apply(node, arguments); };
                    const essSolar = node.essSolar;
                    const message = yield essSolar.readInData();
                    const batConvPower = EssSolar_1.EssSolar.getData(message, "EssInfoStatistics", "batconv_power");
                    const gridPower = EssSolar_1.EssSolar.getData(message, "EssInfoStatistics", "grid_power");
                    const loadPower = EssSolar_1.EssSolar.getData(message, "EssInfoStatistics", "load_power");
                    const pcs_pv_total_power = EssSolar_1.EssSolar.getData(message, "EssInfoStatistics", "pcs_pv_total_power");
                    const soc = EssSolar_1.EssSolar.getData(message, "EssCommonInfoBATT", "soc");
                    send([
                        { payload: message },
                        { payload: batConvPower },
                        { payload: gridPower },
                        { payload: loadPower },
                        { payload: pcs_pv_total_power },
                        { payload: soc }
                    ]);
                }
                catch (e) {
                    console.error(e);
                }
                // Once finished, call 'done'.
                // This call is wrapped in a check that 'done' exists
                // so the node will work in earlier versions of Node-RED (<1.0)
                if (done) {
                    done();
                }
            });
        });
        /**
         * Whenever a new flow is deployed, the existing nodes are deleted.
         * If any of them need to tidy up state when this happens, such as
         * disconnecting from a remote system, they should register a listener
         * on the close event.
        */
        node.on('close', function (removed, done) {
            if (removed) {
                // This node has been disabled/deleted
            }
            else {
                // This node is being restarted
            }
            done();
        });
    };
    RED.nodes.registerType("ess-solar", essSolar);
};
module.exports = func;
//# sourceMappingURL=ess-solar.js.map