const threeSumClosest = function(nums, target) {
  let res = Infinity;
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      if (Math.abs(target - sum) < Math.abs(target - res)) res = sum;
      if (sum < target) {
        start++;
      } else {
        end--;
      }
    }
  }
  return res;
};

const test = threeSumClosest([-1, 2, 1, -4], 1);
console.log(test);
