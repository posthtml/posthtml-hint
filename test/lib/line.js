const test = require('ava')

const line = require('../../lib/line')

test('line and column default to zero', t => {
  const res = line()
  const expect = '\u001b[37m[0:0]\u001b[39m'
  t.is(res, expect)
})
