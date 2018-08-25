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
  const bracketStack = [];
  for (let i = 0; i < brackets.length; i++) {
    if (brackets[i] in pairs) bracketStack.push(brackets[i]);
    else if (pairs[bracketStack[bracketStack.length - 1]] === brackets[i])
      bracketStack.pop();
    else return false;
  }
  return true;
}

const one = balancedBrackets('({)}'); // false
const two = balancedBrackets('({[]})'); // true
const test = balancedBrackets('[][(){}'); // false
const test2 = balancedBrackets('text ( is allowed ){rwwrwrrww [] ()}'); // true
console.log(one, two);
console.log(test, test2);
