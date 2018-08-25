function balancedBrackets(str) {
  const bracketsRegex = /[[\](){}]/g;
  const brackets = str.match(bracketsRegex);
  if (!str.length || !brackets.length) return true;
  if (brackets.length % 2) return false;
  const pairs = {
    '[': ']',
    '(': ')',
    '{': '}',
  };
}

// balancedBrackets('({)}'); // false
// balancedBrackets('({[]})'); // true
const test = balancedBrackets('[][(){}'); // false
const test2 = balancedBrackets('text ( is allowed ){rwwrwrrww [] ()}'); // true
console.log(test, test2);
