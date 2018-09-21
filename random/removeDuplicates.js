function removeDuplicates(nums) {
  if (!nums.length) return 0;
  let curr = nums[0];
  let length = 1;
  for (let i = 1, j = 1; i < nums.length; i++) {
    if (nums[i] !== curr) {
      curr = nums[i];
      nums[j] = curr;
      length++;
      j++;
    }
  }
  return length;
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const test = removeDuplicates(nums);
console.log(test); // 5
console.log(nums); // [0,1,2,3,4, ...]
