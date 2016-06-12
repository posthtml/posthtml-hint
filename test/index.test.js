// ------------------------------------
// #POSTHTML - HINT - TEST
// ------------------------------------

'use strict'

const test = require('ava')
const plugin = require('../')

const { readFileSync } = require('fs')

function read (path) {
  return readFileSync(path, 'utf8')
}

test('should lint HTML and error as expected', (t) => {
  require('posthtml')([ plugin() ])
    .process(read('./fixtures/index.html'))
    .then((result) => {
      t.is(result.html, read('./expect/index.html'))
    })
})
