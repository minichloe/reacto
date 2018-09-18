// Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of squared digits of the previous element. The sequence ends once an element that has already been in the sequence appears again.
function strangeSequence(num) {
  const set = new Set();
  let sequence = 1;
  let newNum;
  while (!set.has(num)) {
    set.add(num);
    num = calculateSumSquared(num);
    sequence++;
  }
  return sequence;
}

function calculateSumSquared(num) {
  let res = 0;
  while (num > 0) {
    const temp = num % 10;
    res += temp ** 2;
    num = Math.floor(num / 10);
  }
  return res;
}

const test = strangeSequence(16);
console.log(test);
