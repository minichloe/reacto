function minimum(A) {
  A = new Set(A);
  let num = 1;
  while (A.has(num)) {
    num++;
  }
  return num;
}

const test = minimum([1]);
console.log(test);
