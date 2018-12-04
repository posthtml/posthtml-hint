const test = require('ava')

const msg = require('../../lib/msg')

test('should transform msgs', t => {
  const res = msg('test')
  const expect = '\u001b[34mtest\u001b[39m'

  t.is(res, expect)
})

const longMsg = 'lorem ipsum dolor sit amet.'

test('should split long msgs', t => {
  const res = msg([longMsg, longMsg, longMsg, longMsg].join(' '))
  const expect = '\u001b[34mlorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.\u001b[39m\n\u001b[34mlorem ipsum dolor sit amet.\u001b[39m'

  t.is(res, expect)
})

test('should split longer msgs', t => {
  const res = msg([longMsg, longMsg, longMsg, longMsg, longMsg, longMsg, longMsg, longMsg, longMsg, longMsg, longMsg, longMsg, longMsg].join(' '))
  const expect = '\u001b[34mlorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.\u001b[39m\n\u001b[34mlorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.\u001b[39m\n\u001b[34mlorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.\u001b[39m'

  t.is(res, expect)
})
