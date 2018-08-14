function validator(arr) {
  for (let i = 0; i < 9; i++) {
    if (!checker(arr[i])) return false;
    const column = [];
    for (let j = 0; j < 9; j++) {
      column.push(arr[j][i]);
    }
    if (!checker(column)) return false;
  }
}
