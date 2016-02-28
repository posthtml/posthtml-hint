[![NPM][npm]][npm-url]
[![Node][node]][node-url]
[![Dependencies][deps]][deps-url]
[![DevDependencies][devdeps]][devdeps-url]
[![Standard Code Style][style]][style-url]

# PostHTML Hint <img align="right" width="200" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

Lint files with [HTML Hint](http://htmlhint.com)

## Install

```bash
$ npm i -D posthtml-hint
```

## Status

| Branch               | Build                     | Coverage                  |
|:--------------------:|:-------------------------:|:-------------------------:|
|  Master              | ![travis]                 | ![cover]                  |
|  Develop             | ![travis-dev]             | ![cover-dev]              |

## Usage
#### Options

**Rules [String|Object]**

**[Rules Reference]**(https://github.com/yaniswang/HTMLHint/wiki/Rules)

```js
const hint = require('posthtml-hint')('./path/to/.htmlhintrc')
```

## Usage
### Options
#### Rules [String|Object]

#### [Rules Reference](https://github.com/yaniswang/HTMLHint/wiki/Rules)

```js
const hint = require('posthtml-hint')('./path/to/.htmlhintrc')
```

#### Example

For general usage and build process integration see [PostHTML Docs](https://github.com/posthtml/posthtml#usage)

```js
const fs = require('fs')

const posthtml = require('posthtml')

const hint = require('posthtml-hint')(/* options */)

let html = fs.readFileSync('./index.html', 'utf8')

posthtml([ hint ])
  .process(html)
  .then(result => console.log(result.html))
```

#### Output
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

## LICENSE [![MIT][license]][license-url]

> MIT License (MIT)

>Copyright (c) Michael Ciniawsky

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

[node]: https://img.shields.io/node/v/gh-badges.svg?maxAge=2592000
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/posthtml/posthtml-hint.svg
[deps-url]: https://david-dm.org/posthtml/posthtml-hint

[devdeps]: https://david-dm.org/posthtml/posthtml-hint/dev-status.svg
[devdeps-url]: https://david-dm.org/posthtml/posthtml-hint#info=devDependencies

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[travis]: http://img.shields.io/travis/posthtml/posthtml-hint.svg
[travis-url]: https://travis-ci.org/posthtml/posthtml-hint

[travis-rel]: http://img.shields.io/travis/posthtml/posthtml-hint.svg?branch=release/1.0.0
[travis-rel-url]:https://travis-ci.org/posthtml/posthtml-hint?branch=release/1.0.0

[travis-dev]: http://img.shields.io/travis/posthtml/posthtml-hint.svg?branch=develop
[travis-dev-url]: https://travis-ci.org/posthtml/posthtml-hint?branch=develop

[cover]: https://coveralls.io/repos/github/posthtml/posthtml-hint/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/posthtml/posthtml-hint?branch=master

[cover-rel]: https://coveralls.io/repos/github/posthtml/posthtml-hint/badge.svg?branch=release<ver>
[cover-rel-url]: https://coveralls.io/github/posthtml/posthtml-hint?branch=release<ver>

[cover-dev]: https://coveralls.io/repos/github/posthtml/posthtml-hint/badge.svg?branch=develop
[cover-dev-url]: https://coveralls.io/github/posthtml/posthtml-hint?branch=develop

[license]: https://img.shields.io/github/license/posthtml/posthtml-hint.svg
[license-url]: https://raw.githubusercontent.com/posthtml/posthtml-hint/master/LICENSE
