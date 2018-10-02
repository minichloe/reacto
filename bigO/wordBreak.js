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
  let start = 0,
    end = 0;
  let node = trie;
  const res = [];
  for (let i = 0; i < s.length; i++) {
    if (start === end && !node.hasOwnProperty(s[i])) return false;
    if (!node.hasOwnProperty(s[i])) {
      res.push(s.substring(start, end));
      start = i;
      end = start;
      node = trie[s[i]];
      if (!node) return false;
    } else {
      end++;
      node = node[s[i]];
    }
    if (i === s.length - 1) {
      res.push(s.substring(start));
    }
  }
  console.log(res);
  return true;
}

const test = wordBreak('applepenapple', ['apple', 'pen']);
console.log(test);
