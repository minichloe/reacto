// Given N row of seats with 10 seats each in a 3-4-3 configuration (A - K with I omitted), return the max number of 3 seat pairings (aisle between seats is not a valid pairing)

function planeSeats(rows, S) {
  // If there are no reserved seats, each row can seat three families
  // if (!S.length) return rows * 3;
  // Create array of reserved seats
  S = S.toUpperCase().split(' ');
  // Convert array to set for constant time lookup
  S = new Set(S);
  let results = 0;
  for (let i = 1; i <= rows; i++) {
    // Check 'abc' row is empty
    if (!S.has(`${i}A`) && !S.has(`${i}B`) && !S.has(`${i}C`)) {
      results++;
    }
    // Check 'hjk' row is empty
    if (!S.has(`${i}H`) && !S.has(`${i}J`) && !S.has(`${i}K`)) {
      results++;
    }
    // Check middle seats are not taken
    if (!S.has(`${i}E`) && !S.has(`${i}F`)) {
      if (!S.has(`${i}D`) || S.has(`${i}G`)) results++;
    }
  }
  return results;
}

const test = planeSeats(10, '');
console.log(test);
