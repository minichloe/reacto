function reverseWords(str) {
  str = str.trim().replace(/\s+/gi, ' ');
  // if (str === ' ') return '';
  return str
    .split(' ')
    .reverse()
    .join(' ');
}

const test = reverseWords('   ');
console.log('a' + test + 'a');
