'use strict'

const chalk = require('chalk')
const log = require('log-symbols')

exports = module.exports = type => chalk.red(`${log.error + ' ' + type}`)
