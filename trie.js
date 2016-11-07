const trie = require('wayfarer/trie')

module.exports.createTrie = files => {
  console.log(files)

  const fileTrie = trie()
  const firstFile = files.shift()
  const node = fileTrie.create(firstFile)
  files.forEach(f => fileTrie.mount(f, fileTrie))
  return trie
}
