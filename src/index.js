const express                = require('express')
const setting                = require('./settings/environment/index')
const logger                 = require('./tools/logger')
const bodyParser             = require('body-parser');
const { ConfigApiRoutes }    = require('./configurations/apiRouterConfig');
const processor              = require('./helpers/processor');
const { IotHandler }         = require('./helpers/iot-handler');

const app = express();
 
app.use(bodyParser.json({
  limit: '5mb'
}));

app.use(bodyParser.urlencoded({
  extended: false
}));

processor(new IotHandler());

ConfigApiRoutes(app);

const { port, host } = setting.server;

app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }
  logger.appStarted(port, host);
});
