function searchRange(nums, target) {
  const res = [-1, -1];
  if (nums[0] > target || nums[nums.length - 1] < target) return res;
  let mid = Math.floor(nums.length / 2);
  let left = 0,
    right = nums.length - 1;
  for (left, right; left < right; ) {
    nums[mid] > target ? (right = mid - 1) : (left = mid + 1);
    if (nums[mid] === target) {
      (left = mid - 1), (right = mid + 1);
      while (nums[left] === target || nums[right] === target) {
        if (nums[left] === target) left--;
        if (nums[right] === target) right++;
      }
      return [left + 1, right - 1];
    }
    mid = Math.floor((left + right) / 2);
  }
  return res;
}

const test = searchRange([5, 7, 7, 8, 8, 10], 6);
const test2 = searchRange([1], 1);
console.log(test, test2);
