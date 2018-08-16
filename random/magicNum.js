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
  let finalArr = [0];
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    const tempNums = [...finalArr];
    finalArr = [];
    for (num of tempNums) {
      const addNum = num + arr[i];
      const minusNum = num - arr[i];
      if (i === arr.length - 1) {
        if (addNum === target) res++;
        if (minusNum === target) res++;
        continue;
      }
      finalArr.push(addNum, minusNum);
    }
  }
  return res;
}

const test = magicNum(11, [1, 2, 3, 4, 5]);
const test2 = magicNumCount(3, [1, 1, 1, 1, 1]);
console.log(test, test2);
