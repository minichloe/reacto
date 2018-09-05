function uniquePaths(m, n) {
  if (m === 1 || n === 1) return 1;
  const currentRow = new Array(n).fill(1);
  for (let row = 1; row < m; row++) {
    for (let i = 1; i < n; i++) {
      currentRow[i] += currentRow[i - 1];
    }
  }
  return currentRow[n - 1];
}
