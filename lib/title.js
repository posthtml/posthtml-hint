'use strict'

let chalk = require('chalk')

exports = module.exports = function (title) {
  return console.log(chalk.white.bold.underline(title))
}
