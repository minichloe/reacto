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
  let start = 0;
  let node = trie;
  const res = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!node.hasOwnProperty(char)) {
      if (start === i) return false;
      res.push(s.substring(start, i));
      node = trie[char];
      if (!node) return false;
      start = i;
    } else {
      node = node[char];
    }
    if (i === s.length - 1) {
      res.push(s.substring(start));
    }
  }
  return true;
}

const test = wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']);
console.log(test);
