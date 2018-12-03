'use strict'

const chalk = require('chalk')
const log = require('log-symbols')

exports = module.exports = function (type) {
  return chalk.red(`${log.error + ' ' + type}`)
}
