function openLock(deadends, target) {
  if (target === '0000') return 0;
  const deadSet = new Set(deadends);
  if (deadSet.has('0000')) return -1;
  const queue = [target];
  const steps = [0];
  while (queue.length) {
    const base = queue.shift();
    const step = steps.shift() + 1;
    const permutations = generatePermutations(base);
    if (permutations.has('0000')) return step;
    permutations.forEach(x => {
      if (!deadSet.has(x)) {
        deadSet.add(x);
        queue.push(x);
        steps.push(step);
      }
    });
  }
  return -1;
}

function generatePermutations(base) {
  const res = new Set();
  for (let i = 0; i < base.length; i++) {
    for (let inc = 1; inc > -2; inc -= 2) {
      const newDigit = (Number(base[i]) + 10 + inc) % 10;
      const permutation = base.slice(0, i) + newDigit + base.slice(i + 1);
      res.add(permutation);
    }
  }
  return res;
}

const test = openLock(['0201', '0101', '0102', '1212', '2002'], '0202');
const test2 = openLock(['0000'], '0109');
console.log(test); // 6
console.log(test2); // -1
