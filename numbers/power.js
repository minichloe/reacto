function myPow(x, n) {
  if (n === 0 || x === 1) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  if (n % 3 === 0) return myPow(x * x * x, n / 3);
  else if (n % 2 === 0) return myPow(x * x, n / 2);
  else return x * myPow(x, n - 1);
}

const test = myPow(2.1, 3);
console.log(test);
