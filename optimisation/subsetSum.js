// Target sum and array of positive integers, add numbers to target return boolean
function subsetSum(target, arr) {
  const sumSet = new Set([0]);
  for (let i = 0; i < arr.length; i++) {
    const currSums = new Set(sumSet);
    for (num of currSums) {
      const newSum = arr[i] + num;
      if (newSum === target) return true;
      else if (newSum < target) sumSet.add(newSum);
    }
  }
  return false;
}

// Recursive approach
function subsetSumRecursion(target, arr, idx = 0) {
  if (target === 0) return true;
  if (target < 0 || idx === arr.length) return false;
  const num = arr[idx];
  const whenExcluded = subsetSumRecursion(target, arr, idx + 1);
  const whenIncluded = subsetSumRecursion(target - num, arr, idx + 1);
  return whenExcluded || whenIncluded;
}

// Recurisve with memoization
function subsetSumMemo(target, arr, idx = 0, memo = {}) {
  if (memo.hasOwnProperty(target)) return memo[target];
}

const res = subsetSum(2, [1, 10, 5, 3]); // false
// subsetSum(10, [1, 10, 5, 3]); // true
// const res = subsetSum(9, [1, 10, 5, 3]); // true
// subsetSum(19, [1, 10, 5, 3]); // true
// subsetSum(17, [1, 10, 5, 3]); // false

console.log(res);
