const test = require('ava')
const chalk = require('chalk')

const { transform } = require('../../lib/title')

test('should transform titles', t => {
  const res = transform('test')
  const expect = chalk.white('test')
  t.is(res, expect)
})
