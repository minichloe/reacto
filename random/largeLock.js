function largeLock(arr1, arr2) {
  let rotations = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) continue;
    else {
      const turn = arr1[i] > arr2[i] ? (arr1[i] = arr2[i]) : arr2[i] - arr1[i];
      const turn2 =
        arr1[i] > arr2[i] ? 9 - arr1[i] + arr[2] : 9 - arr1[i] + arr2[i];
      rotations += Math.min(turn, turn2);
    }
  }
  return rotations;
}

const test = largeLock([0, 0, 0], [3, 1, 8]);
console.log(test);
