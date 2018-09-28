function uniquePaths(m, n) {
  if (m === 1 || n === 1) return 1;
  const currentRow = new Array(n).fill(1);
  for (let row = 1; row < m; row++) {
    for (let i = 1; i < n; i++) {
      currentRow[i] += currentRow[i - 1];
    }
  }
  console.log(currentRow);
  return currentRow[n - 1];
}

// const test = uniquePaths(7, 3);
// console.log(test);

function uniquePathsWithObstacles(grid) {
  // Initialize board with length of a single row and fill with 1
  const board = new Array(grid[0].length).fill(1);

  // Loop through each row of the grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 1; j < board.length; j++) {
      // Do nothing in the first row as there is only one unique path
      if (i === 0 && grid[i][j] !== 1) continue;

      // If there is an obstacle that path is impossible and set to 0
      if (grid[i][j] === 1) board[j] = 0;
      else board[j] += board[j - 1];
    }
  }
  return board[board.length - 1];
}

const test2 = uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]);
console.log(test2); // 2
