// Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

// function removeDuplicates(nums) {
//   let currVal = nums[0];
//   let seenTwice = false;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== currVal) {
//       currVal = nums[i];
//       seenTwice = false;
//     } else if (seenTwice) {
//       nums.splice(i, 1);
//       i--;
//     } else {
//       seenTwice = true;
//     }
//   }
//   return nums;
// }

var removeDuplicates = function(nums) {
  let lastIndex = 0;
  nums.unshift('#');
  nums.forEach((n, index) => {
    if (nums[lastIndex] != n) {
      lastIndex++;
      nums[lastIndex] = n;
      if (nums[index + 1] == nums[lastIndex]) {
        lastIndex++;
        nums[lastIndex] = nums[index + 1];
      }
    }
  });
  nums.shift();
  return nums;
};

const test = removeDuplicates([1, 1, 1, 1, 2, 2, 3]);
console.log(test);
