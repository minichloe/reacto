// Given an array of non-negative integers, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Determine if you are able to reach the last index.

// Max stack
function canJumpRecursive(nums, end, idx = 0, visited = {}) {
  if (nums.length === 1) return true;
  visited[idx] = true;
  end = end || nums.length - 1;
  const curr = new Array(nums[idx]).fill(1).map((x, i) => x + i);
  return curr.some(x => {
    if (idx + x === end) return true;
    else if (x === 0) return false;
    else if (!visited[idx + x]) return canJump(nums, end, idx + x);
    else return false;
  });
}

function canJump(nums) {
  let end = nums.length - 1;
  for (let i = end - 1; i >= 0; i--) {
    if (nums[i] >= end - i) end = i;
  }
  return end === 0;
}

const test = canJump([3, 2, 1, 1, 4]);
console.log(test);
