const josephus = (players, steps) => {
  const arr = new Array(players).fill(1).map((x, i) => i + 1);
  let i = 0;
  while (arr.length > 1) {
    i = (i + steps) % arr.length;
    arr.splice(i - 1, 1);
  }
  return arr[0];
};

const test = josephus(14, 2);
console.log(test);
