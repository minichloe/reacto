function validator(arr) {
  for (let i = 0; i < 9; i++) {
    if (!checker(arr[i])) return false;
    const column = [];
    const section = [];
    for (let j = 0; j < 9; j++) {
      column.push(arr[j][i]);
      const x = (i % 3) * 3 + Math.floor(j / 3);
      const y = (j % 3) + Math.floor(i / 3) * 3;
      section.push(arr[x][y]);
    }
    if (!checker(column) || !checker(section)) return false;
  }
  return true;
}

function checker(arr) {
  return arr.slice().reduce((a, b) => a + b, 0) === 45;
}

const test = validator([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
]);

// console.log(test);
