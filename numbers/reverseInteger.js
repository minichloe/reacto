// Given a 32-bit signed integer, reverse digits of an integer.

function reverse(x) {
  let res = 0;
  let n = Math.abs(x);
  while (n > 0) {
    res = res * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  if (res > Math.pow(2, 31) + 1) return 0;
  return x > 0 ? res : -res;
}

const test = reverse(1534236469);
console.log(test);
