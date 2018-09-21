function removeDuplicates(nums) {
  if (!nums.length) return 0;
  // Keep track of where we want to switch the values of the array
  let curr = nums[0],
    j = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== curr) {
      curr = nums[i];
      nums[j++] = curr;
    }
  }
  // j is the values switched so also the length
  return j;
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const test = removeDuplicates(nums);
console.log(test); // 5
console.log(nums); // [0,1,2,3,4, ...]
