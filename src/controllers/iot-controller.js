const {searchBlockchain} = require('../services/iot-service')
const {registerBlockchain} = require('../helpers/client')

exports.register = (req, res, next) => {
  try {
    const payload = req.body
    registerBlockchain(payload)
    res.send(200)
    next()
  } catch (e) {
    throw e
  }
}

exports.search = (req, res, next) => {
  const address = req.params.address
  console.log(address);
  searchBlockchain(address, (obj) => {
    res.send(obj)
    next()
  })
}
