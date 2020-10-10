
const helper = require("node-red-node-test-helper");
const lowerNode = require("../src/ess-solar.js");
const credential = require("../credential.js");



describe('lower-case Node', function () {

    beforeEach(function (done) {
        helper.startServer(done);
    });

    afterEach(function (done) {
        helper.unload();
        helper.stopServer(done);
    });


    const flow = [
        {
            id: "EssSolar", type: "ess-solar", name: "EssSolarName", addr: credential.Credential.ipadress, passwd: credential.Credential.passwd,
            wires: [["InfluxDb"]]
        },
        { id: "InfluxDb", type: "helper" }

    ];



    const testMsg = {};

    it('should be loaded', function (done) {
        var flow = [{ id: "EssSolar", type: "ess-solar", name: "EssSolarName", addr: credential.Credential.ipadress, passwd: credential.Credential.passwd }];
        helper.load(lowerNode, flow, function () {
            var underTestNode = helper.getNode("EssSolar");
            underTestNode.should.have.property('name', 'EssSolarName');
            done();
        });
    });

    it('should return Device', function (done) {
        helper.load(lowerNode, flow, function () {
            var helperNode = helper.getNode("InfluxDb");
            var underTestNode = helper.getNode("EssSolar");

            helperNode.on("input", function (msg) {

                //msg.should.have.property('payload', '{"Device":"0x6DBE","Name":"TmpSens1","BatteryVoltage":3.005,"BatteryPercentage":100,"Voltage":3.005,"Battery":100,"Temperature":27.17,"Humidity":51.87,"Endpoint":1,"LinkQuality":39}');
                done();
            });
            underTestNode.receive(testMsg);
        });
    });

});