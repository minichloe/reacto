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
  console.log(allNums);
  return allNums.has(target);
}

const test = magicNum(11, [1, 2, 3, 4]);
console.log(test);
