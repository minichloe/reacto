function reverseString(str) {
  function reverseStringHelper(acc, rest) {
    if (rest.length === 0) {
      return acc;
    } else {
      const head = rest.charAt(rest.length - 1);
      const tail = rest.substring(rest, rest.length - 1);

      return reverseStringHelper(acc + head, tail);
    }
  }

  return reverseStringHelper('', str);
}

const test = reverseString('Fullstack');
console.log(test);
