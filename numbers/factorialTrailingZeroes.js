function trailingZeroes(n) {
  let zeroes = 0;
  while (n > 4) {
    zeroes += Math.floor((n /= 5));
  }
  return zeroes;
}

const test = trailingZeroes(30);
console.log(test);
