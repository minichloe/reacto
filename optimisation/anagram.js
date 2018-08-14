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
  return Object.keys(wordObj).filter(word => wordObj[word].length > 1);
}
