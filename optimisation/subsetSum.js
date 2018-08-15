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
