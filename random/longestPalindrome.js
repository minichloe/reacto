function longestPalindrome(str) {
  if (str.length <= 1) return str;
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (i > 0 && str[i] == str[i - 1]) checkPalindrome(i - 1, i);
    checkPalindrome(i, i);
  }
  return res;

  function checkPalindrome(L, R) {
    while (L >= 0 && R < str.length) {
      // Check palindrome from center and keep expanding outwards
      if (str[L] == str[R]) {
        L--;
        R++;
      } else break;
    }
    // Reverse left index by one since the last iteration is not a palindrome
    L++;
    // Check to see if new palindrome is longer than previous recorded answer
    if (R - L > res.length) res = str.substring(L, R);
  }
}

const test = longestPalindrome('cbbcdc');
console.log(test);
