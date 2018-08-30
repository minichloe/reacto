function moveZeroes(nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }
  for (j + 1; j < nums.length; j++) {
    nums[j] = 0;
  }
  return nums;
}

const test = moveZeroes([0, 1, 0, 3, 12]);
console.log(test);
