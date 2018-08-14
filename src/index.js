const express                = require('express')
const setting                = require('./settings/environment/index')
const logger                 = require('./tools/logger')
const bodyParser             = require('body-parser');
const { ConfigApiRoutes }     = require('./configurations/apiRouterConfig');

const app = express();
 
app.use(bodyParser.json({
  limit: '5mb'
}));

app.use(bodyParser.urlencoded({
  extended: false
}));


app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

ConfigApiRoutes(app);

const { port, host } = setting.server;

app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }
  logger.appStarted(port, host);
});
