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
  return Object.values(map);
};

const test = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
console.log(test);
/* [
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
*/
