// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

function findDuplicate(nums) {
  let slow = 0;
  fast = nums[slow];
  while (nums[slow] != nums[fast]) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return nums[slow];
}

const test = findDuplicate([3, 1, 3, 4, 2]);
console.log(test);
