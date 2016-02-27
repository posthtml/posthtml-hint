// ------------------------------------
// #POSTHTML - HINT
// ------------------------------------

'use strict'

const fs = require('fs')
const path = require('path')

const chalk = require('chalk')

const htmlhint = require('htmlhint').HTMLHint
const stylish = require('htmlhint-stylish')

const render = require('posthtml-render')

exports = module.exports = function (options) {
  options = options || {}

  return function PostHTMLHint (tree) {
    htmlhint.verify(render(tree), options).forEach(msg => {
      console.log(msg)
    })
    return tree
  }
}
