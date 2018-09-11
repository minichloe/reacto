function myPow(x, n) {
  if (n === 1) return x;
  if (n < 0) {
    x = 1 / x;
    n = Math.abs(n);
  }
  return x * myPow(x, n - 1);
}

const test = myPow(2, 10);
console.log(test);
