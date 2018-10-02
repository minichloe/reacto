// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.
function wordBreak(s, wordDict) {
  const trie = {};
  wordDict.forEach(x => {
    let node = trie;
    for (char of x) {
      node[char] = node[char] || {};
      node = node[char];
    }
  });
  return trie;
}

const test = wordBreak('leetcode', ['leet', 'code']);
console.log(test);
