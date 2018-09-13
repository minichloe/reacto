function isValid(s) {
  if (s.length % 2) return false;
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const arr = [];
  for (x of s) {
    if (brackets.hasOwnProperty(x)) arr.push(x);
    else if (brackets[arr.pop()] === x) continue;
    else return false;
  }
}
