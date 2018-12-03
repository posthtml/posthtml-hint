'use strict'

const chalk = require('chalk')

exports = module.exports = function (msg) {
  let line = ''
  let line2 = ''

  if (msg.length > 80 && msg.length <= 160) {
    line = msg.slice(msg.indexOf(' ', 80) + 1)

    msg = msg.slice(0, msg.indexOf(' ', 80))

    return chalk.blue(msg.concat('\n', line))
  }

  if (msg.length > 160) {
    line = msg.slice(msg.indexOf(' ', 80) + 1)
    line2 = line.slice(line.indexOf(' ', 80) + 1)

    line = line.slice(0, line.indexOf(' ', 80))
    msg = msg.slice(0, msg.indexOf(' ', 80))

    return chalk.blue(msg.concat('\n', line, '\n', line2))
  }

  return chalk.blue(msg)
}
