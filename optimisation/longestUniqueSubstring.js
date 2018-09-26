// function lengthOfLongestSubstring(str) {
//   let count = 0,
//     leftIdx = 0,
//     rightIdx = 0;
//   const map = {};
//   if (!str.length) return count;
//   while (rightIdx < str.length) {
//     const leftChar = str[leftIdx];
//     const rightChar = str[rightIdx];
//     if (map[rightChar] === undefined) {
//       map[rightChar] = rightIdx;
//       rightIdx++;
//     } else {
//       leftIdx = map[rightChar] + 1;
//       delete map[leftChar];
//     }
//     count = Math.max(count, rightIdx - leftIdx);
//   }
//   return count;
// }

function lengthOfLongestSubstring(str) {
  let count = 1,
    leftIdx = 0,
    rightIdx = 0;
  const map = { [str[leftIdx]]: leftIdx };
  if (!str.length) return 0;
  while (rightIdx < str.length) {
    rightIdx++;
    if (rightIdx === str.length) break;
    const rightChar = str[rightIdx];
    if (map[rightChar] !== undefined && map[rightChar] >= leftIdx)
      leftIdx = map[rightChar] + 1;
    map[rightChar] = rightIdx;
    count = Math.max(count, rightIdx - leftIdx + 1);
  }
  return count;
}

function longestLength(str) {
  if (!str.length) return 0;
  let count = 1,
    leftIdx = 0,
    rightIdx = 0;
  const map = { [str[leftIdx]]: leftIdx };
  for (++rightIdx; rightIdx < str.length; rightIdx++) {
    if (map.hasOwnProperty(str[rightIdx])) {
      leftIdx = Math.max(leftIdx, map[str[rightIdx]] + 1);
    }
    count = Math.max(count, rightIdx - leftIdx + 1);
    map[str[rightIdx]] = rightIdx;
  }
  return count;
}

// const test = lengthOfLongestSubstring('abca');
// console.log(test);
const test2 = longestLength('abcda');
console.log(test2);
