function lexicalOrder(n) {
  const nums = [];
  const factor = [];
  while (n > 0) {
    factor.push(n % 10);
    n = Math.floor(n / 10);
  }
  console.log(factor);
  if (factor.length > 1) nums.push(1);
  // while (factor.length) {
  //   const count = factor.pop();
  //   con;
  // }
}

const test = lexicalOrder(13);
console.log(test);
