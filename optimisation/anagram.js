function anagram(arr) {
  const wordObj = {};
  arr.forEach(word => {
    const wordKey = word
      .split('')
      .sort()
      .join('');
    if (!wordObj[wordKey]) wordObj[wordKey] = [word];
    else wordObj[wordKey].push(word);
  });
  return Object.keys(wordObj).reduce((output, word) => {
    if (wordObj[word].length > 1) output.push(wordObj[word]);
    return output;
  }, []);
}

const test = anagram([
  'cat',
  'act',
  'ignore',
  'a phrase',
  'tape',
  'pate',
  'e hpsara',
]);

console.log(test);
