'use strict'

const chalk = require('chalk')

exports = module.exports = (line, column) => chalk.white(`[${line || 0}:${column || 0}]`)
