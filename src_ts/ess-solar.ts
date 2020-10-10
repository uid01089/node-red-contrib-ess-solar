import { Node, Red, NodeProperties } from "node-red";
import { EssSolar } from "./EssSolar";

const func = (RED: Red) => {
    const essSolar = function (config: NodeProperties) {

        this.addr = (config as any).addr;
        this.passwd = (config as any).passwd;

        this.essSolar = new EssSolar(this.addr, this.passwd);

        const node: Node = this;



        RED.nodes.createNode(node, config);


        /** 
         * Nodes register a listener on the input event 
         * to receive messages from the up-stream nodes in a flow.
        */
        node.on("input", async function (msg, send, done) {

            // For maximum backwards compatibility, check that send exists.
            // If this node is installed in Node-RED 0.x, it will need to
            // fallback to using `node.send`
            send = send || function () { node.send.apply(node, arguments) }

            const essSolar = ((node as any).essSolar) as EssSolar;




            const message = await essSolar.readInData();
            send({ payload: message });


            // Once finished, call 'done'.
            // This call is wrapped in a check that 'done' exists
            // so the node will work in earlier versions of Node-RED (<1.0)
            if (done) {
                done();
            }


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
            } else {
                // This node is being restarted
            }
            done();
        });

    }
    RED.nodes.registerType("ess-solar", essSolar);
}

module.exports = func;