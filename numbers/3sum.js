const threeSum = nums => {
  const res = [];
  nums = nums.sort((a, b) => a - b);
  console.log(nums);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) return res;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      if (sum === 0) {
        res.push([nums[i], nums[start], nums[end]]);
        while (start < end && nums[start] === nums[start - 1]) {
          start++;
        }
        while (start < end && nums[end] === nums[end + 1]) {
          end--;
        }
      } else {
        sum < 0 ? start++ : end--;
      }
    }
  }
  return res;
};

const test = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(test);
