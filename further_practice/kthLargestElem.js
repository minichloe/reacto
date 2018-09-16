// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// function findKthLargest(nums, k) {
//   nums = nums.sort((a, b) => a - b);
//   return nums[nums.length - k];
// }

function findKthLargest(nums, k) {
  const set = new Set(nums);
  nums = nums.reduce((a, b) => {
    if (a[b]) a[b] += 1;
    else a[b] = 1;
    return a;
  }, {});
  let max;
  while (k) {
    max = Math.max(...set);
    if (nums[max] === 1) set.delete(max);
    else nums[max] -= 1;
    k--;
  }
  return max;
}

const test = findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
console.log(test);
