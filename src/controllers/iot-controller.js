const { searchBlockchain }  = require('../services/iot-service')
const { registerBlockchain } = require('../helpers/client')

exports.register = (req, res, next) => {
    const obj = req.body;
    console.log("obj", obj);
    
    registerBlockchain(obj);
    res.send(200);
    next();
}

exports.search = (req, res, next) => {
    console.log("search");
    const address = req.params.address;
    searchBlockchain(address, (obj) => {
        res.send(obj);
        next();
    });
}