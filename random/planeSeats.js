// Given N row of seats with 10 seats each in a 3-4-3 configuration (A - K with I omitted), return the max number of 3 seat pairings (aisle between seats is not a valid pairing)

function solution(rows, S) {
  if (!S.length) return rows * 3;
  S = new Set(S.toUpperCase().split(' '));
  let results = 0;
  console.log(S);
  for (let i = 1; i <= rows; i++) {
    if (!S.has(`${i}A`) && !S.has(`${i}B`) && !S.has(`${i}C`)) {
      results++;
    }
    if (!S.has(`${i}H`) && !S.has(`${i}J`) && !S.has(`${i}K`)) {
      results++;
    }
    if (!S.has(`${i}E`) && !S.has(`${i}F`)) {
      if (!S.has(`${i}D`) || S.has(`${i}G`)) results++;
    }
    console.log(i, results);
  }
  return results;
}

const test = solution(10, '1A 2B 10D');
console.log(test);
