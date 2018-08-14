'use strict';

const {Router}                 = require('express')
const iotService               = require('../services/iot-service')

const iotRouter =  Router();

iotRouter.post('/register', iotService.register);
iotRouter.get('/search', iotService.search);

module.exports = { iotRouter }