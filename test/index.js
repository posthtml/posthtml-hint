// ------------------------------------
// #POSTHTML - HINT - TEST
// ------------------------------------

'use strict'

const posthtml = require('posthtml')
const test = require('ava')
const path = require('path')
const plugin = require('../')

const fs = require('fs')

async function run () {
  return new Promise((resolve, reject) => {
    const html = fs.readFileSync(path.join(__dirname, 'fixtures', 'index.html'), 'utf8')
    posthtml([plugin()]).process(html).then(resolve, reject)
  })
}

test('should lint HTML and error as expected', async (t) => {
  const result = await run()
  const html = fs.readFileSync(path.join(__dirname, 'expect', 'index.html'), 'utf8')
  t.is(result.html, html)
})
