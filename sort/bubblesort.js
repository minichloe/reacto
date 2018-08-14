function bubblesort(arr) {
  const length = arr.length - 1;
  for (let i = length; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  return arr;
}

const test = bubblesort([2, 4, 1, 67, 24, 89, 0, -20, -4, 23]);

console.log(test);
