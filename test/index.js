// ------------------------------------
// #POSTHTML - HINT - TEST
// ------------------------------------

'use strict'

const posthtml = require('posthtml')
const test = require('ava')
const util = require('util')
const path = require('path')
const plugin = require('../')

const nfs = require('fs')

const fs = {
  readFile: util.promisify(nfs.readFile)
}

const read = (path) => fs.readFile(path, 'utf8')

async function run () {
  try {
    const contents = await read(path.join(__dirname, 'fixtures', 'index.html'))
    const result = await posthtml([ plugin() ])
      .process(contents)

    return result
  } catch (e) {
    return e
  }
}

test('should lint HTML and error as expected', async (t) => {
  const result = await run()
  t.is(result.html, await read(path.join(__dirname, 'expect', 'index.html')))
})
