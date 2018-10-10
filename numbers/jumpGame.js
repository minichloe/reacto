// Given an array of non-negative integers, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Determine if you are able to reach the last index.

function canJump(nums, end, idx = 0) {
  end = end || nums.length - 1;
  const curr = new Array(nums[idx]).fill(1).map((x, i) => x + i);
  return curr.some(x => {
    if (idx + x === end) return true;
    else if (x === 0) return false;
    else return canJump(nums, end, idx + x);
  });
}

const test = canJump([3, 2, 1, 0, 4]);
console.log(test);
