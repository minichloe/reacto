function reverseWords(str) {
  str = str.trim().replace(/\s+/gi, ' ');
  if (str === ' ') return '';
  return str
    .split(' ')
    .reverse()
    .join(' ');
}
