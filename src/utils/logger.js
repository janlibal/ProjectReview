import pino from 'pino';

import app from '../../package.json' assert {type: 'json'};
//const config = require('../config')

import app from '../../package.json';

export default ({
  name: app.name,
  level:config.logger.minLevel,
  enabled: config.logger.enabled,
})

