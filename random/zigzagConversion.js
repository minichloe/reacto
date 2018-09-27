function convert(str, numRows) {
  if (numRows === 1) return str;
  const res = new Array(numRows).fill('');
  let idx = 0,
    direction = 1;
  for (let i = 0; i < str.length; i++) {
    console.log(idx, direction);
    res[idx] += str[i];
    idx += direction;
    if (!idx || idx >= numRows - 1) direction *= -1;
  }
  return res.join('');
}

const test = convert('ABC', 1);
console.log(test);
