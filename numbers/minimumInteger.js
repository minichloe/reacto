function minimum(A) {
  A = new Set(A);
  let num = 1;
  while (A.has(num)) {
    num++;
  }
  return num;
}
// function minimum(A) {
//   const min = Math.min(...A);
//   const max = Math.max(...A);
//   if (min > 1 || max < 1) return 1;
//   const nums = new Set(A);
//   let i = 1;
//   for (; i < max; i++) {
//     if (nums.has(i)) continue;
//     else return i;
//   }
//   return i + 1;
// }

const test = minimum([2]);
console.log(test);
