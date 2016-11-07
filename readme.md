# file-trie [![Build Status](https://secure.travis-ci.org/johnotander/file-trie.svg?branch=master)](https://travis-ci.org/johnotander/file-trie) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

__Work in progress__

Turn a file glob into a trie structure.

## Installation

```bash
npm i -S file-trie
```

## Usage

```javascript
const fileTrie = require('file-trie')

fileTrie('some-dir/**/*.js').then(doStuff).catch(handleError)

fileTrie(['my-dir/**/*', '!my-dir/node_modules/**/*'])
  .then(doStuff)
  .catch(handleError)
```

## Related

- [`globby`](https://github.com/sindresorhus/globby)
- [`wayfarer`](https://github.com/yoshuawuyts/wayfarer)
- [`is-present`](https://github.com/johnotander/is-present)

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
