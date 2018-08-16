// Given a number of players in a circle and steps taken to remove every person, find position of last person remaining

const josephus = (players, steps) => {
  const arr = new Array(players).fill(1).map((x, i) => i + 1);
  let i = 0;
  while (arr.length > 1) {
    i = (i + steps) % arr.length;
    console.log(i);
    arr.splice(i - 1, 1);
  }
  return arr[0];
};

const test = josephus(10, 2);
console.log(test);

function josephusRecursion(players, steps) {
  if (players === 1) return 1;
  else
    return ((josephusRecursion(players - 1, steps) + steps - 1) % players) + 1;
}

// n is even: f(n) = 2f(n/2) - 1
// n is odd: f(n) = 2f((n-1/2)) + 1
// Steps if 2, and O(log N) time, O(1) space
function josephus2(players) {
  let p = 1;
  while (p <= players) p *= 2;
  return 2 * players - p + 1;
}
