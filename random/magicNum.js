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
    const length = finalArr.length;
    let j = 0;
    while (j < length) {
      const num = finalArr[j];
      const addNum = num + arr[i];
      const minusNum = num - arr[i];
      if (i === arr.length - 1) {
        if (addNum === target) res++;
        if (minusNum === target) res++;
        j++;
        continue;
      }
      finalArr[j] = addNum;
      j++;
      finalArr.push(minusNum);
    }
  }
  return res;
}

function magicNumHash(target, arr) {
  let hash = { 0: 1 };
  for (let i = 0; i < arr.length; i++) {
    let newHash = {};
    for (let key in hash) {
      const keyVal = parseInt(key);
      newHash[keyVal + arr[i]] = (newHash[keyVal + arr[i]] || 0) + hash[key];
      newHash[keyVal - arr[i]] = (newHash[keyVal - arr[i]] || 0) + hash[key];
    }
    hash = newHash;
  }
  return hash[target] || 0;
}

const test = magicNum(11, [1, 2, 3, 4, 5]);
const test2 = magicNumHash(3, [1, 1, 1, 1, 1]);
console.log(test, test2);
