[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Coverage][cover]][cover-url]
[![Standard Code Style][style]][style-url]
[![Chat][chat]][chat-badge]

# Hint Plugin <img align="right" width="200" height="220" title="PostHTML" src="http://posthtml.github.io/posthtml/logo.svg">

## Install

```bash
npm i -D posthtml-hint
```

## Usage

#### Options

**Rules [String|Object]**

**[Rules Reference](https://github.com/yaniswang/HTMLHint/wiki/Rules)**

```js
const hint = require('posthtml-hint')('./path/to/.htmlhintrc')
```

## Example

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

## Maintainers

<table>
  <tbody>
   <tr>
    <td align="center">
      <img width="150 height="150"
      src="https://avatars.githubusercontent.com/u/5419992?v=3&s=150">
      <br />
      <a href="https://github.com/michael-ciniawsky">Michael Ciniawsky</a>
    </td>
   </tr>
  <tbody>
</table>

## Contributing

See [PostHTML Guidelines](https://github.com/posthtml/posthtml/tree/master/docs) and [contribution guide](CONTRIBUTING.md).

## LICENSE

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/posthtml-hint.svg
[npm-url]: https://npmjs.com/package/posthtml-hint

[deps]: https://david-dm.org/posthtml/posthtml-hint.svg
[deps-url]: https://david-dm.org/posthtml/posthtml-hint

[travis]: http://img.shields.io/travis/posthtml/posthtml-hint.svg
[travis-url]: https://travis-ci.org/posthtml/posthtml-hint

[cover]: https://coveralls.io/repos/github/posthtml/posthtml-hint/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/posthtml/posthtml-hint?branch=master

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[chat]: https://badges.gitter.im/posthtml/posthtml.svg
[chat-badge]: https://gitter.im/posthtml/posthtml?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"
