function twoSum(arr, target) {
  const map = {};
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    const difference = target - arr[i];
    const foundIdx = map[difference];
    if (foundIdx === undefined) map[arr[i]] = i;
    else if (foundIdx !== i) {
      i > foundIdx ? results.push([foundIdx, i]) : results.push([i, foundIdx]);
    }
  }
  return results;
}

const test = twoSum([1, 2, 3, 4, 5, 6], 10);
console.log(test);
