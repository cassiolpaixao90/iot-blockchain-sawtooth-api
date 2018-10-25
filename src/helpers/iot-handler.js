'use strict'

const { createHash } = require('crypto')
const { TransactionHandler } = require('sawtooth-sdk/processor/handler')
const { InvalidTransaction } = require('sawtooth-sdk/processor/exceptions')
const { Decoder } = require('cbor')

const {
  calculateWaterAddress,
  handlerInfo
} = require('../services/iot-service')

const getAddress = (key, length = 64) => {
  return createHash('sha512')
    .update(key)
    .digest('hex')
    .slice(0, length)
}

const encode = obj => Buffer.from(JSON.stringify(obj, Object.keys(obj).sort()))

class IotHandler extends TransactionHandler {
  constructor () {
    console.log('Iniciando smart contract')
    const info = handlerInfo()
    super(info.family, [info.version], [info.prefix])
  }

  apply (txn, context) {
    console.log('chegando uma nova transacao')
    const dataDecoded = Decoder.decodeFirstSync(txn.payload)
    const payload = JSON.parse(dataDecoded)
    const blockAddress = calculateWaterAddress(payload)
    const { cost, anomalia } = payload
    console.log('payload', payload)
    return context.setState({
      [blockAddress]: encode({ cost, anomalia })
    })
  }
}

module.exports = { IotHandler, getAddress }
