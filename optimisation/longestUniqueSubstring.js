function lengthOfLongestSubstring(str) {
  let count = 0,
    leftIdx = 0,
    rightIdx = 0;
  const map = {};
  if (!str.length) return count;
  while (rightIdx < str.length) {
    rightIdx++;
    if (rightIdx === str.length) break;
    const rightChar = str[rightIdx];
    if (map[rightChar] === undefined || map[rightChar] < leftIdx) {
      map[rightChar] = rightIdx;
    } else {
      leftIdx = map[rightChar] + 1;
      map[rightChar] = rightIdx;
    }
    count = Math.max(count, rightIdx - leftIdx);
  }
  return count;
}

const test = lengthOfLongestSubstring('abcabc');
console.log(test);
