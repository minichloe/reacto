// function isPalindrome(num) {
//   if (num < 0) return false;
//   const nums = [];
//   while (num > 0) {
//     nums.push(num % 10);
//     num = Math.floor(num / 10);
//   }
//   for (let i = 0, j = nums.length - 1; i < j; ) {
//     if (nums[i] !== nums[j]) return false;
//     i++;
//     j--;
//   }
//   return true;
// }

function isPalindrome(num) {
  if (num < 0) return false;
  let reverse = 0,
    initial = num;
  while (num > 0) {
    reverse = reverse * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return initial === reverse;
}

const test = isPalindrome(102301);
console.log(test);
