// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

function numIslands(grid) {
  let islands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        islands++;
        helper(i, j, grid);
      }
    }
  }
  return islands;
}

function helper(i, j, grid) {
  const queue = [[i, j]];
  while (queue.length) {
    const [a, b] = queue.shift();
    if (grid[a][b] === '1') {
      grid[a][b] = false;
      if (a + 1 < grid.length) queue.push([a + 1, b]);
      if (a - 1 >= 0) queue.push([a - 1, b]);
      if (b + 1 < grid[a].length) queue.push([a, b + 1]);
      if (b - 1 >= 0) queue.push([a, b - 1]);
    }
  }
}

const test = numIslands([
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
]);

console.log(test);
