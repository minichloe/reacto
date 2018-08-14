function decimalToBinary(n) {
  const res = [];
  while (n > 1) {
    const remainder = n % 2;
    res.push(remainder);
    n = Math.floor(n / 2);
  }
  if (n === 1) res.push(1);
  console.log(Number(res.reverse().join('')));
}

function binaryToDecimal(n) {
  let arr = n.toString().split('');
  let power = 1,
    total = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    total += arr[i] * power;
    power *= 2;
  }
  console.log(total);
}

binaryToDecimal(100);
