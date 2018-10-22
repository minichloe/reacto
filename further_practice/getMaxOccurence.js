function getMaxOccurrences(s, minLength, maxLength, maxUnique) {
  s = s.toLowerCase();
  const subStrings = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + minLength; j < s.length + 1; j++) {
      if (j - i > maxLength) break;
      const str = s.slice(i, j);
      if (valid(str)) subStrings.push(str);
    }
  }
  let max = 0;
  const strObj = subStrings.reduce((map, s) => {
    if (map[s]) map[s]++;
    else map[s] = 1;
    max = Math.max(max, map[s]);
    return map;
  }, {});

  console.log(strObj);
  return max;

  function valid(s) {
    const map = {};
    let count = 0;
    const length = s.length;
    for (let i = 0; i < length; i++) {
      const char = s[i];
      if (map[char]) map[char]++;
      else {
        map[char] = 1;
        count++;
      }
      if (i !== length - 1 && count > maxUnique) return false;
    }
    return true;
  }
}
