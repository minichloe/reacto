function longestCommonPrefix(arr) {
  if (arr.length < 1) return '';
  arr.sort((a, b) => a.toLowerCase().length - b.toLowerCase().length);
  if (arr[0].length < 1) return '';
  const length = arr.length;
  let prefix = '';
  for (let i = 0; i < arr[0].length; i++) {
    let pre = true;
    const char = arr[0][i];
    for (let j = 1; j < length; j++) {
      if (arr[j][i] !== char) {
        pre = false;
        break;
      }
    }
    if (pre) prefix += char;
    else break;
  }
  return prefix;
}

// const test = longestCommonPrefix(['flower', 'flow', 'flight']);
const test2 = longestCommonPrefix(['aca', 'cba']);
// console.log(test);
console.log(test2);
