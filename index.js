// ------------------------------------
// #POSTHTML - HINT
// ------------------------------------

'use strict'

const fs = require('fs')
const path = require('path')

const chalk = require('chalk')
const tab = require('text-table')
const log = require('log-symbols')

const render = require('posthtml-render')
const htmlhint = require('htmlhint').HTMLHint

const title = require('./lib/title')
const type = require('./lib/type')
const line = require('./lib/line')
const message = require('./lib/msg')

module.exports = function (options) {
  options = options || {}

  if (typeof options === 'string') {
    options = fs.readFileSync(path.resolve(options), 'utf8')
  }

  return function postHTMLHint (tree) {
    let messages = htmlhint.verify(render(tree), options)

    title('\nPostHTML HINT')

    const table = tab(messages.map(msg => [
      `\n${type(msg.type)} ${line(msg.line, msg.col)}`,
      `\n${message(msg.message)}`
    ]), { align: 'l', hsep: '' })

    console.log(table)

    const result = messages.length

    if (result === 0) {
      console.log(chalk.green(`${log.success}  ${result} Errors`))
    } else {
      console.log(chalk.red(`\n${log.warning}  ${result} Errors`))
    }

    return tree
  }
}
