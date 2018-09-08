// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// function maxSubArray(nums) {
//   let curr = nums[0];
//   const sums = [curr];
//   for (let i = 1; i < nums.length; i++) {
//     const sum = nums[i] + curr;
//     if (sum <= nums[i]) curr = nums[i];
//     else curr = sum;
//     sums.push(curr);
//   }
//   return Math.max(...sums);
// }

// Updated version for O(n) time and O(1) space
function maxSubArray(nums) {
  let curr = nums[0];
  let max = curr;
  for (let i = 1; i < nums.length; i++) {
    curr = Math.max(nums[i] + curr, nums[i]);
    max = Math.max(max, curr);
  }
  return max;
}

const test = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(test); // 6, from [4, -1, 2, 1]
