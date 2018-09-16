function reverseWords(str) {
  return str
    .trim()
    .split(/\s+/)
    .reverse()
    .join(' ');
}

const test = reverseWords('the sky is   blue');
console.log(test);
