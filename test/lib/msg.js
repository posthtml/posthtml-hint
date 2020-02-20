const test = require('ava')
const chalk = require('chalk')

const msg = require('../../lib/msg')

test('should transform msgs', t => {
  const res = msg('test')
  const expect = chalk.white('test')

  t.is(res, expect)
})

const longMsg = 'lorem ipsum dolor sit amet.'

test('should split long msgs', t => {
  const res = msg([longMsg, longMsg, longMsg, longMsg].join(' '))
  const expect = chalk.white('lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.\nlorem ipsum dolor sit amet.')

  t.is(res, expect)
})

test('should split longer msgs', t => {
  const res = msg([longMsg, longMsg, longMsg, longMsg, longMsg, longMsg, longMsg, longMsg, longMsg, longMsg, longMsg, longMsg, longMsg].join(' '))

  const expect = chalk.white('lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.\nlorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.\nlorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.')

  t.is(res, expect)
})
