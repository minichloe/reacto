// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

function fourSum(nums, target) {
  if (nums.length < 4) return [];
  nums = nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i <= nums.length - 4; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let remainder = target - nums[i];
    for (let j = i + 1; j <= nums.length - 3; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let left = j + 1,
        right = nums.length - 1;
      while (left < right) {
        const sum = nums[j] + nums[left] + nums[right];
        if (sum === remainder) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;
          while (nums[left] === nums[left - 1]) left++;
          while (nums[right] === nums[right + 1]) right--;
        } else {
          sum < remainder ? left++ : right--;
        }
      }
    }
  }
  return res;
}

const test = fourSum([1, 0, -1, 0, -2, 2], 0);
console.log(test);
/* [
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/
