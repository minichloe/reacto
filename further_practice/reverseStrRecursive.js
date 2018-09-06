// function reverseString(str) {
//   function reverseStringHelper(acc, rest) {
//     if (rest.length === 0) {
//       return acc;
//     } else {
//       const head = rest.charAt(rest.length - 1);
//       const tail = rest.substring(rest, rest.length - 1);

//       return reverseStringHelper(acc + head, tail);
//     }
//   }

//   return reverseStringHelper('', str);
// }

function reverseString(str) {
  if (str.length === 1) return str;
  return str.charAt(str.length - 1) + reverseString(str.slice(0, -1));
}

const test = reverseString('testing');
console.log(test);
