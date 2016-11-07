'use strict'

const globby = require('globby')
const trie = require('wayfarer/trie')

module.exports = (glob, opts = {}) => {
  const options = Object.assign({}, { nodir: true }, opts)

  return globby(glob, options).then(createTrie)
}

const createTrie = files => {
  const fileTrie = trie()
  const firstFile = files.shift()
  const node = fileTrie.create(firstFile)

  files.forEach(f => fileTrie.mount(f, fileTrie))

  return fileTrie
}
