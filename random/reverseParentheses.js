// function reverseParentheses(s) {
//   s = s.split('');
//   while (s.includes('(')) {
//     let opening, closing;
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] === '(') opening = i;
//       if (s[i] === ')') {
//         closing = i;
//         break;
//       }
//     }
//     const reverse = s.slice(opening + 1, closing).reverse();
//     s.splice(opening, closing - opening + 1, ...reverse);
//   }
//   return s.join('');
// }

function reverseParentheses(s) {
  s = s.split('');
  while (s.lastIndexOf('(') > -1) {
    const openingIdx = s.lastIndexOf('(');
    const closingIdx = openingIdx + s.slice(openingIdx).indexOf(')');
    const reverse = s.slice(openingIdx + 1, closingIdx).reverse();
    s.splice(openingIdx, closingIdx - openingIdx + 1, ...reverse);
  }
  return s.join('');
}

const test = reverseParentheses('co(de(fight)s)'); // cosfighted
console.log(test);
