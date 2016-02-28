'use strict'

let chalk = require('chalk')
let log = require('log-symbols')

exports = module.exports = function (type) {
  return chalk.red(`${log.error + ' ' + type}`)
}
