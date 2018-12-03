'use strict'

const chalk = require('chalk')

exports = module.exports = (line = 0, col = 0) => chalk.white(`[${line}:${col}]`)
