# HTML Hint for PostHTML

Lint files with [HTML Hint](html.org)

## Install

```bash
(sudo) npm i -D posthtml-hint
```

## Usage
### Options
#### Rules [String|Object]

[Rules Reference](https://github.com/yaniswang/HTMLHint/wiki/Rules)

```js
const hint = require('posthtml-hint')('./.htmlhintrc')
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

![](https://github.com/doshprompt/htmlhint-stylish/blob/master/screenshot.png)
