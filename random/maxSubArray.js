// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
function maxSubArray(nums) {
  let curr = nums[0];
  const sums = [curr];
  for (let i = 1; i < nums.length; i++) {
    const sum = nums[i] + curr;
    if (sum <= nums[i]) curr = nums[i];
    else curr = sum;
    sums.push(curr);
  }
  return Math.max(...sums);
}
