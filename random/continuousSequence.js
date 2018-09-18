function continuousSequences(num) {
  const digits = [];
  // Get all individual digits of integer
  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  const results = [];
  // Loop through digits and add odd/even numbers together
  let currNum = digits[digits.length - 1];
  let isOddOrEven = currNum % 2;
  for (let i = digits.length - 2; i >= 0; i--) {
    if (digits[i] % 2 === isOddOrEven) {
      currNum = currNum * 10 + digits[i];
    } else {
      results.push(currNum);
      currNum = digits[i];
      isOddOrEven = currNum % 2;
    }
    // Check to see if it is the final iteration of the loop and add numberto results
    if (i === 0) results.push(currNum);
  }
  return results;
}

const test = continuousSequences(135206);
console.log(test);
