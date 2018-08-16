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
      // if (i === arr.length - 1) {
      //   if (newNum === target) res++
      //   if (minusNum === target) res++
      // }
    }
  }
  return allNums.has(target);
}

// Return num of different ways numbers can compute to target
function magicNumCount(target, arr) {
  let finalArr = [0];
  for (let i = 0; i < arr.length; i++) {
    const tempNums = [...finalArr];
    finalArr = [];
    for (num of tempNums) {
      finalArr.push(num + arr[i]);
      finalArr.push(num - arr[i]);
    }
  }
  return finalArr.filter(x => x === target).length;
}

const test = magicNum(11, [1, 2, 3, 4, 5]);
console.log(test);
