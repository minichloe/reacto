const groupAnagrams = strs => {
  const map = {};
  strs.forEach(word => {
    const key = word
      .split('')
      .sort()
      .join('');
    if (key in map) {
      map[key].push(word);
    } else {
      map[key] = [word];
    }
  });
  const res = [];
  Object.keys(map).forEach(key => {
    if (map[key].length > 1) res.push(map[key]);
  });
  return res;
};
