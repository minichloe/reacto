function isPalindrome(num) {
  if (num < 0) return false;
  const nums = [];
  while (num > 0) {
    nums.push(num % 10);
    num = Math.floor(num / 10);
  }
  for (let i = 0, j = nums.length - 1; i < j; ) {
    if (nums[i] !== nums[j]) return false;
    i++;
    j--;
  }
  return true;
}

const test = isPalindrome(10013);
console.log(test);
