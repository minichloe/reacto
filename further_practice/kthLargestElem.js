// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

function findKthLargest(nums, k) {
  const set = new Set(nums);
  let max;
  while (k) {
    set.delete(max);
    max = Math.max(...set);
    k--;
  }
  return max;
}

const test = findKthLargest([3, 2, 1, 5, 6, 4], 2);
console.log(test);
