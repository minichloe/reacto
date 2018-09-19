function lengthOfLongestSubstring(str) {
  let count = 0,
    leftIdx = 0,
    rightIdx = 0;
  const map = {};
  if (!str.length) return count;
  while (rightIdx < str.length) {
    const leftChar = str[leftIdx];
    const rightChar = str[rightIdx];
    if (map[rightChar] === undefined) {
      map[rightChar] = rightIdx;
      rightIdx++;
    } else {
      delete map[leftChar];
      leftIdx++;
    }
    count = Math.max(count, rightIdx - leftIdx);
  }
  return count;
}

const test = lengthOfLongestSubstring('abcabcabb');
console.log(test);
