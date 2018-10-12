// Given a string s, partition s such that every substring of the partition is a palindrome.

function partition(s) {
  const res = [];
  for (let i = 0; i < s.length; i++) {
    // if (s[i] > 0 && s[i] == s[i-1]) addPalindrome(i-1, i)
    const curr = [];
    for (let j = i + 1; j <= s.length; j++) {
      curr.push(s.slice(i, j));
      i = j;
      j = i + 1;
    }
    res.push(curr);
  }

  return res;
  function addPalindrome(l, r) {}
}

const test = partition('aab');
console.log(test);
