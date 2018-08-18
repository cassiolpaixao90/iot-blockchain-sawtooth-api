const cors = require('cors')
const {iotRouter} = require('../routes/iot-route')

function ConfigApiRoutes (app) {
  app.use(cors())
  app.use('/api', iotRouter)
}

module.exports = {ConfigApiRoutes}
