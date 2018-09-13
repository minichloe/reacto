// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

function findDuplicate(nums) {
  if (nums.length <= 2) return nums[0];
  let slow = nums[0];
  fast = nums[slow];
  while (slow !== fast) {
    console.log(slow, fast);
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  fast = 0;
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}

const test = findDuplicate([3, 1, 3, 4, 2]);
console.log(test);
