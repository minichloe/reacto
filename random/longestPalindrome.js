function longestPalindrome(str) {
  if (str.length < 1) return '';
  let start = 0,
    end = 0;
  for (let i = 0; i < str.length; i++) {
    let len1 = expandAroundCentre(str, i, i);
    let len2 = expandAroundCentre(str, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - (len - 1) / 2;
      end = i + len / 2;
    }
  }
  return str.slice(start, end + 1);
}

function expandAroundCentre(str, left, right) {
  let L = left,
    R = right;
  while (L >= 0 && R < str.length && str[L] === str[R]) {
    L--;
    R++;
  }
  return R - L - 1;
}

const test = longestPalindrome('cbbd');
console.log(test);
