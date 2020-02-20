const test = require('ava')
const chalk = require('chalk')

const line = require('../../lib/line')

test('line and column default to zero', t => {
  const res = line()
  const expect = chalk.white('[0:0]')
  t.is(res, expect)
})
