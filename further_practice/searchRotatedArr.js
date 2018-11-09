function search(nums, target) {
  if (nums[0] === target) return 0;
  let left = 0,
    right = nums.length - 1;
  let pivot = findPivot(nums);
  if (nums[pivot] === target) return pivot;
  else if (pivot > 0) target > nums[right] ? (right = pivot - 1) : (left = pivot + 1);
  else left++;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    nums[mid] < target ? (left = mid + 1) : (right = mid - 1);
  }
  return -1;

  function findPivot(nums) {
    let left = 0,
      right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (mid < right && nums[mid] > nums[mid + 1]) return mid;
      if (mid > left && nums[mid] < nums[mid - 1]) return mid - 1;
      nums[left] >= nums[mid] ? (right = mid - 1) : (left = mid + 1);
    }
  }
}

const test = search([3, 1], 1);
console.log(test);
