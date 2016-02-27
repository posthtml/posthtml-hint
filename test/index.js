'use strict'

const fs = require('fs')

let posthtml = require('posthtml')

let lint = require('../index')()

let html = fs.readFileSync('./index.html', 'utf-8')

posthtml([ lint ])
  .process(html)
  .then(result => result.html)
