# HTML Hint for PostHTML

Lint files with [HTML Hint](html.org)

## Install

```bash
(sudo) npm i -D posthtml-hint
```

## Usage
### Options
#### Rules [String|Object]

#### [Rules Reference](https://github.com/yaniswang/HTMLHint/wiki/Rules)

```js
const hint = require('posthtml-hint')('./path/to/.htmlhintrc')
```

### Example using Node API

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
