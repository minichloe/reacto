// Given a string s, partition s such that every substring of the partition is a palindrome.

function partition(s) {
  const res = [];
  const curr = [];
  if (s === null || !s.length) return res;
  addPalindrome(s, 0, curr);
  return res;

  function addPalindrome(s, start, curr) {
    if (start === s.length) {
      res.push([...curr]);
      return;
    }
    for (let i = start + 1; i <= s.length; i++) {
      const str = s.slice(start, i);
      if (isPalindrome(str)) {
        curr.push(str);
        addPalindrome(s, i, curr);
        // curr.splice(curr.length - 1, 1);
        curr.pop();
      }
    }
  }

  function isPalindrome(str) {
    let left = 0,
      right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  }
}

const test = partition('abcbm');
console.log(test);
