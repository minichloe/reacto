function merge(intervals) {
  const res = [];
  let prev = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i];
    if (prev[1] >= curr[0] && prev[1] < curr[1]) prev = [prev[0], curr[1]];
    else {
      res.push(prev);
      prev = curr;
    }
  }
  if (res[res.length - 1] !== prev) res.push(prev);
  return res;
}

const test = merge([[1, 3], [2, 6], [8, 10], [15, 18]]);
const test2 = merge([[1, 4], [4, 5], [7, 9]]);
console.log(test2);
