function generateParentheses(n) {
  if (n === 0) return [];
  return recursiveParentheses('', n * 2, 0);
}

function recursiveParentheses(str, max, count) {
  if (max - str.length === count) {
    return [str.padEnd(max, ')')];
  }
  let r1 = recursiveParentheses(str + '(', max, count + 1);
  let r2 = count > 0 ? recursiveParentheses(str + ')', max, count - 1) : [];
  return r1.concat(r2);
}
