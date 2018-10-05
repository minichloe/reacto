function trailingZeroes(n) {
  let res = 1;
  while (n > 1) {
    res *= n;
    n--;
  }
  let zeroes = 0;
  while (res % 10 === 0) {
    zeroes++;
    res = Math.floor(res / 10);
  }
  console.log(res % 10);
  return zeroes;
}

const test = trailingZeroes(30);
console.log(test);
