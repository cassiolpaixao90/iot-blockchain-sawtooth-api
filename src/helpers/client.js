'use strict'

const cbor = require('cbor')
const {buildSawtoothPackage, sendToSawtoothApi} = require('../services/iot-service')

const registerBlockchain = function (payload) {
    console.log("payload", payload);
    const payloadBytes = cbor.encode(JSON.stringify(payload));
    console.log("payloadBytes", payloadBytes);
    
    const batchBytes = buildSawtoothPackage(payloadBytes, payload.userNumber);

    sendToSawtoothApi(batchBytes);
}

module.exports = {
    registerBlockchain
}