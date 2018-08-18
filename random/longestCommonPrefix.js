function longestCommonPrefix(arr) {
  arr.sort((a, b) => a.toLowerCase().length - b.toLowerCase().length);
  const length = arr.length;
  const prefix = '';
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
  }
  return prefix;
}
