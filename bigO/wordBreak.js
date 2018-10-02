// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Half solution using trie but does not account for words within words
// function wordBreak(s, wordDict) {
//   const trie = {};
//   wordDict.forEach(x => {
//     let node = trie;
//     for (char of x) {
//       node[char] = node[char] || {};
//       node = node[char];
//     }
//   });
//   let start = 0;
//   let node = trie;
//   const res = [];
//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     if (!node.hasOwnProperty(char)) {
//       if (start === i) return false;
//       res.push(s.substring(start, i));
//       node = trie[char];
//       if (!node) return false;
//       start = i;
//     } else {
//       node = node[char];
//     }
//     if (i === s.length - 1) {
//       res.push(s.substring(start));
//     }
//   }
//   return true;
// }

// Solution using set and dynamic programming
function wordBreak(s, wordDict) {
  const set = new Set(wordDict);
  const dp = new Array(s.length + 1).fill(false);
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      const word = s.substring(j, i);
      if (set.has(word) && (j === 0 || dp[j] === true)) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}

const test = wordBreak('abcd', ['a', 'ab', 'cd']);
console.log(test);
