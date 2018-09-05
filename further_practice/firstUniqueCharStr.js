const firstUniqChar = s => {
  const map = {};
  for (let x of s) {
    if (map.hasOwnProperty(x)) map[x] += 1;
    else map[x] = 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) return i;
  }
  return -1;
};
