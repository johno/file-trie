import test from 'ava'
import fileTrie from './'

test('file-trie does something awesome', async t => {
  const trie = await fileTrie(['**/*', '!node_modules/**/*'])

  t.truthy(trie)
})
