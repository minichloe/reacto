// function longestIncreasingSubsequence(sequence, idx = 0, base = -Infinity) {
//   if (idx === sequence.length) return 0;
//   const num = sequence[idx];
//   const whenExcluded = longestIncreasingSubsequence(sequence, idx + 1, base);
//   if (num <= base) return whenExcluded;
//   const whenIncluded = 1 + longestIncreasingSubsequence(sequence, idx + 1, num);
//   console.log(Math.max(whenIncluded, whenExcluded));
//   return Math.max(whenIncluded, whenExcluded);
// }

// O(n*logm) using binary search
// function longestIncreasingSubsequence(nums) {
//   if (!nums.length) return 0;
//   const dp = [nums[0]];
//   for (let i = 1; i < nums.length; i++) {
//     let min = 0,
//       max = nums.length;
//     while (min < max) {
//       const mid = Math.floor((max + min) / 2);
//       // console.log('mid', mid);
//       // console.log(dp[mid]);
//       dp[mid] < nums[i] ? (min = mid + 1) : (max = mid);
//       console.log('while', dp);
//     }
//     dp[max] = nums[i];
//     console.log('for', dp);
//   }
//   return dp.length;
// }

function longestIncreasingSubsequence(arr) {
  const res = new Array(arr.length).fill(1);
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        const newLength = res[j] + 1;
        if (res[i] < newLength) res[i] = newLength;
      }
    }
  }
  return Math.max(...res);
}

const test = longestIncreasingSubsequence([
  10,
  22,
  9,
  33,
  20,
  50,
  41,
  60,
  80,
  21,
  23,
  24,
  25,
  26,
  27,
  28,
]);
const test2 = longestIncreasingSubsequence([3, 4, 2, 1, 10, 6]);

console.log(test, test2);
