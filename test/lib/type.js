const test = require('ava')
const chalk = require('chalk')

const types = require('../../lib/type')

test('should log errors in red', t => {
  const res = types('test')
  t.is(res, chalk.white('✖ test'))
})
