function largeLock(arr1, arr2) {
  let rotations = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) continue;
    else {
      const turn = Math.abs(arr1[i] - arr2[i]);
      const turn2 = 10 - turn;
      rotations += Math.min(turn, turn2);
    }
  }
  return rotations;
}

const test = largeLock([0, 0, 0], [3, 1, 8]);
console.log(test);
