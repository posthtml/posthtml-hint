'use strict'

const chalk = require('chalk')

const transform = title => chalk.white.bold.underline(title)

exports = module.exports = (title) => console.log(transform(title))
exports.transform = transform
