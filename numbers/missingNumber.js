function missingNumber(nums) {
  let x = 0,
    y = nums.length;
  for (let i = 0; i < nums.length; i++) {
    x += nums[i];
    y += i;
  }
  return y - x;
}

const test = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
console.log(test);
