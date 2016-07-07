[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Tests][travis]][travis-url]
[![Coverage][cover]][cover-url]
[![Standard Code Style][style]][style-url]

<div align="center">
  <img width="220" height="150" title="PostHTML" src="http://posthtml.github.io/posthtml/logo.svg">
  <h1>Hint Plugin</h1>
  <p>Lint files with <a href="http://htmlhint.com">HTML HINT</a></p>
</div>

<h2 align="center">Install</h2>

```bash
npm i -D posthtml-hint
```

<h2 align="center">Usage</h2>

#### Options

**Rules [String|Object]**

**[Rules Reference](https://github.com/yaniswang/HTMLHint/wiki/Rules)**

```js
const hint = require('posthtml-hint')('./path/to/.htmlhintrc')
```

<h2 align="center">Example</h2>

```js
const { readFileSync } = require('fs')

const posthtml = require('posthtml')

const hint = require('posthtml-hint')(/* options */)
const html = readFileSync('./index.html', 'utf8')

posthtml([ hint ])
  .process(html)
  .then(result => console.log(result.html))
```

#### Console

```bash
PostHTML HINT
-------------

✖ error [10:12]
Special characters must be escaped : [ > ].

✖ error [12:3]
Special characters must be escaped : [ < ].

✖ error [12:21]
Special characters must be escaped : [ < ].

✖ error [12:30]
Special characters must be escaped : [ > ].

✖ error [15:17]
Tag must be paired, no start tag: [ </h1> ]

⚠  5 Errors
```

<h2 align="center">LICENSE</h2>

> MIT License (MIT)

>Copyright (c) PostHTML Michael Ciniawsky <michael.ciniawsky@gmail.com>

> Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[npm]: https://img.shields.io/npm/v/posthtml-hint.svg
[npm-url]: https://npmjs.com/package/posthtml-hint

[deps]: https://david-dm.org/posthtml/posthtml-hint.svg
[deps-url]: https://david-dm.org/posthtml/posthtml-hint

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[travis]: http://img.shields.io/travis/posthtml/posthtml-hint.svg
[travis-url]: https://travis-ci.org/posthtml/posthtml-hint

[cover]: https://coveralls.io/repos/github/posthtml/posthtml-hint/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/posthtml/posthtml-hint?branch=master
