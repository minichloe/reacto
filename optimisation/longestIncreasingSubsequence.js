function longestIncreasingSubsequence(arr) {
  const res = new Array(arr.length).fill(1);
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        const newLength = res[j] + 1;
        if (res[i] > newLength) res[i] = newLength;
      }
    }
  }
  return Math.max(...res);
}
