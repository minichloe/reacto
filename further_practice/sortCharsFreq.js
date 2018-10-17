// Given a string, sort it in decreasing order based on the frequency of characters.
// 'tree' => 'eert'

function frequencySort(s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char]) map[char]++;
    else map[char] = 1;
  }
  const order = [];
  let res = '';
  Object.keys(map).forEach(x => {
    const freq = map[x];
    if (order[freq] === undefined) order[freq] = [];
    order[freq].push(x);
  });
  for (let i = order.length; i > 0; --i) {
    if (order[i] === undefined) continue;
    order[i].sort();
    for (x of order[i]) {
      res += x.repeat(i);
    }
  }
  return res;
}

const test = frequencySort('cccaaa');
console.log(test);
