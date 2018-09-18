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
  console.log(map);
};
