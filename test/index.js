'use strict'

const fs = require('fs')

const posthtml = require('posthtml')
const plugin = require('../index')

let html = fs.readFileSync('./index.html', 'utf-8')

posthtml([ plugin() ])
  .process(html)
  .then(result => console.log(result.html))
