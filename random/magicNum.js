// Return true if adding + or - with all numbers in the array will equal the target
function magicNum(target, arr) {
  const allNums = new Set([0]);
  for (let i = 0; i < arr.length; i++) {
    const tempNums = new Set(allNums);
    allNums.clear();
    for (num of tempNums) {
      const newNum = num + arr[i];
      const minusNum = num - arr[i];
      allNums.add(newNum);
      allNums.add(minusNum);
    }
  }
  return allNums.has(target);
}

// Return num of different ways numbers can compute to target
function magicNumCount(target, arr) {
  const
}

const test = magicNum(11, [1, 2, 3, 4, 5]);
console.log(test);
