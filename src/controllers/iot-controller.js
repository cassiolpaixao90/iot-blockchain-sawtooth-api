const { searchBlockchain }  = require('../services/iot-service')
const { registerBlockchain } = require('../helpers/client')

exports.register = (req, res, next) => {
    const payload = req.body;    
    registerBlockchain(payload);
    res.send(200);
    next();
}

exports.search = (req, res, next) => {
    const address = req.params.address;
    searchBlockchain(address, (obj) => {
        res.send(obj);
        next();
    });
}