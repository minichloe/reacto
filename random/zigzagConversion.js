function convert(str, numRows) {
  const res = new Array(numRows).fill('');
  let idx = 0,
    direction = 1;
  for (let i = 0; i < str.length; i++) {
    res[idx] += str[i];
    idx += direction;
    if (!idx || idx >= numRows) direction = -1;
  }
  return res.join('');
}
