'use strict';

const _ = require('lodash')
const env = process.env.NODE_ENV || 'development'
const setting = require(`./${env}.js`);

const all = {
  envNode: setting.envNode,
  envTunel: setting.envTunel,
  server: {
    host: setting.server.host,
    port: setting.server.port
  }
};

module.exports = _.assign(all, setting);



