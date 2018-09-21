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
      if (!S.has(`${i}D`) || !S.has(`${i}G`)) results++;
    }
  }
  return results;
}

// function planeSeats(rows, reserved) {
//   const map = {
//     A: 0,
//     B: 1,
//     C: 2,
//     D: 3,
//     E: 4,
//     F: 5,
//     G: 6,
//     H: 7,
//     J: 8,
//     K: 9,
//   };
//   let plan = new Array(rows).fill(0).map(x => new Array(10).fill(0));
//   reserved = reserved.toUpperCase().split(' ');
//   console.log(reserved);
//   for (seat of reserved) {
//     let [num, letter] = seat.split('');
//     const idx = map[letter];
//     num--;
//     if (num > plan.length || idx > 10) continue;
//     plan[num][idx] = 1;
//   }
//   let results = 0;
//   for (let i = 0; i < plan.length; i++) {
//     const currRow = plan[i];
//     const firstThree = currRow.slice(map.A, map.D).reduce((a, b) => a + b, 0);
//     const middle1 = currRow.slice(map.D, map.G).reduce((a, b) => a + b, 0);
//     const middle2 = currRow.slice(map.E, map.H).reduce((a, b) => a + b, 0);
//     const lastThree = currRow.slice(map.H).reduce((a, b) => a + b, 0);
//     const middle = Math.min(middle1, middle2);
//     if (firstThree === 0) results++;
//     if (middle === 0) results++;
//     if (lastThree === 0) results++;
//   }
//   return results;
// }

const test = planeSeats(10, '1a 1b 3c 4d');
console.log(test);
