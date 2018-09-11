function myPow(x, n) {
  if (n === 0 || x === 1) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  return x * myPow(x, n - 1);
}

const test = myPow(2.1, 3);
console.log(test);
