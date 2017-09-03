var now = require('performance-now');
var _ = require('underscore');

module.exports = function () {

    //These Objects will be add at runtime...
    //this.socket = {}
    //this.user = {}

    this.initiate = function () {
        // do some stuff ...
        var client = this;

        // Send the connection handshake packet to the client
        client.socket.write(packet.build(["HELLO",now().toString()]))

        console.log('client initiated');
    };

    this.data = function (data) {
        console.log("client data " + data.toString());
    };

    this.error = function (err) {
        console.log("client error" + err.toString());
    };

    this.end = function () {
        console.log("client closed");
    };


};