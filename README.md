# HTML Tidy for PostHTML

[HTML Tidy](html-tidy.org) corrects and cleans up HTML and XML documents by fixing markup errors and upgrading legacy code to modern standards.

## Install

```bash
(sudo) npm i -D posthtml-tidy
```

## Usage
### Options
#### log   [Boolean]

Boolean option which logs tidied html to the console.
By default no output is logged.

#### rules [Object]

If no rules set, tidy will use it's default setup.
For rules take a look at the [Quick Reference](http://api.html-tidy.org/tidy/quickref_5.1.25.html).
Multi-word rules separated with a hyphen should be used with camelCase.

```js
const tidy = require('posthtml-tidy')({
  log: true,
  rules: {
    doctype: 'omit',
    hideComments: true,
    dropEmptyElements: true
    // more options...
  }
})
```
#### Input
```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>PostHTML Tidy</title>
</head>

<body>
  <!-- Bad format -->
  <h1>Well formatted</h1>
  <h1>Bad formatted</h4>
  <h6>Even worse formatted</h1

  <div></div>
</body>

</html>
```
#### Output
```html
<html>
<head>

<meta charset="utf-8">
<title>PostHTML Tidy</title>

</head>

<body>

<h1>Well formatted</h1>
<h1>Bad formatted</h1>
<h6>Even worse formatted</h6>

</body>
</html>
```

### Example using Node API

For general usage and build process integration see [PostHTML Docs](https://github.com/posthtml/posthtml#usage)

```js
const fs = require('fs')

const posthtml = require('posthtml')

const tidy = require('posthtml-tidy')(/* options */)

let html = fs.readFileSync('./index.html', 'utf8')

posthtml([ tidy ])
  .process(html)
  .then(result => console.log(result.html))
```
#### Input
```html
<h1>Well formatted</h1>
<h1>Bad formatted</h4>
<h6>Even worser formatted</h1
```
#### Output
```html
<h1>Well formatted</h1>
<h1>Bad formatted</h1>
<h6>Even worser formatted</h6>
```
