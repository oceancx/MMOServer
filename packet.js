
var zeroBuffer  = new Buffer('00' , 'hex');

module.exports = packet = {

    // params: an array of javascript objects to be turned into buffers.
    build :function (params) {

        var packetParts = [];
        var packetSize = 0;

        params.forEach(function (param) {
            var buffer;

            if(typeof param === 'string'){
                // do this ...
                buffer = new Buffer(param,'utf-8');
                buffer = Buffer.concat([buffer, zeroBuffer] , buffer.length + 1);

            }else if(typeof param === 'number'){
                buffer = new Buffer(2);
                buffer.writeUInt16LE(param, 0);


            }else{
                console.log("WARNING: Unknown data type in packet builder!");


            }

            packetSize+= buffer.length;
            packetParts.push(buffer);

        });

        var dataBuffer  = Buffer.concat(packetParts,packetSize);

        var size = new Buffer(1);
        size.writeUInt8(dataBuffer.length+1,0);

        // SIZE -> DATA
        var finalPacket  = Buffer.concat([size,dataBuffer],size.length + dataBuffer.length)

        return finalPacket;
    }


};