'use strict'

const fs = require('fs')

let posthtml = require('posthtml')

let hint = require('../index')()

let html = fs.readFileSync('./index.html', 'utf-8')

posthtml([ hint ])
  .process(html)
  .then(result => result.html)
