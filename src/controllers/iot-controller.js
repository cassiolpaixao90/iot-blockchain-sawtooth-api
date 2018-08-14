const { registerBlockchain, searchBlockchain }  = require('../services/iot-service')

exports.register = (req, res, next) => {
    const obj = req.body;
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