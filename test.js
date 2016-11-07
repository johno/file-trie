import test from 'ava'
import fileTrie from './'

test('matches files that were globbed', async t => {
  const trie = await fileTrie(['**/*', '!node_modules/**/*'])

  t.truthy(trie.match('docs/index.html', trie))
  t.truthy(trie.match('index.js', trie))
})

test('does not match nonexistent files', async t => {
  const trie = await fileTrie(['**/*', '!node_modules/**/*'])

  t.falsy(trie.match('foo/bar', trie))
  t.falsy(trie.match('baz', trie))
})
