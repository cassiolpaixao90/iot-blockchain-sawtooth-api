'use strict'

const {Router} = require('express')
const iotController = require('../controllers/iot-controller')

const iotRouter = Router();

iotRouter.post('/register', iotController.register);
iotRouter.get('/search', iotController.search);

module.exports = {iotRouter}
