function lexicalOrder(n) {
  if (n < 1) return [];
  const hash = {};
  const nums = [];
  for (let i = 1; i < 10; i++) {
    if (i <= n) {
      nums.push(i);
      helper(i);
    }
  }
  return nums;

  function helper(p) {
    for (let i = 0; i < 10; i++) {
      const curr = p * 10 + i;
      if (curr > n) return;
      else nums.push(curr);
      helper(curr);
    }
  }
}

const test = lexicalOrder(103);
console.log(test);
