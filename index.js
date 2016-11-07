'use strict'

const globby = require('globby')
const { createTrie } = require('./trie')

module.exports = (glob, opts = {}) => {
  const options = Object.assign({}, { nodir: true }, opts)
  return globby(glob, options).then(createTrie)
}
