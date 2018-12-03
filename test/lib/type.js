const test = require('ava')

const types = require('../../lib/type')

test('should log errors in red', t => {
  const res = types('test')
  t.is(res, '\u001b[31m\u001b[31m✖\u001b[31m test\u001b[39m')
})
