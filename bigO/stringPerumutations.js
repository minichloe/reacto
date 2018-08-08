function stringPerumutations(str) {
  if (str.length === 1) return [str];
  const all = [];
  let i = 0;
  while (i < str.length) {
    const letter = str[i];
    const otherChars = str.slice(0, i) + str.slice(i + 1);
    stringPerumutations(otherChars).forEach(subPerm => {
      all.push(letter + subPerm);
    });
    while (str[i] === letter) i++;
    console.log(all);
  }
  return all;
}

function sortStringPermutations(str) {
  str = str
    .split('')
    .sort()
    .join('');
  const results = stringPerumutations(str);
  console.log(results);
}

sortStringPermutations('app');
