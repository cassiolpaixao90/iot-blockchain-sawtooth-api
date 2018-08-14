exports.register = (req, res, next) => {
    const obj = req.body;
    registerBlockchain(obj);

    res.send(200);
    next();
}

exports.search = (req, res, next) => {
    const address = req.params.address;
    console.log(address);

    searchBlockchain(address, (obj) => {
        res.send(obj);
        next();
    });
}