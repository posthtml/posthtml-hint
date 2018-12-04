const test = require('ava')

const { transform } = require('../../lib/title')

test('should transform titles', t => {
  const res = transform('test')
  const expect = '\u001b[37m\u001b[1m\u001b[4mtest\u001b[24m\u001b[22m\u001b[39m'
  t.is(res, expect)
})
