// function quicksort(arr, left = 0, right = arr.length - 1) {
//   if (left < right) {
//     let pivot = right;
//     let partitionIdx = partition(arr, pivot, left, right);
//     quicksort(arr, left, partitionIdx - 1);
//     quicksort(arr, partitionIdx + 1, right);
//   }
//   return arr;
// }

// function partition(arr, pivot, left, right) {
//   let partitionIdx = left;
//   for (let i = left; i < right; i++) {
//     if (arr[i] < arr[pivot]) {
//       swap(arr, i, partitionIdx);
//       partitionIdx++;
//     }
//   }
//   swap(arr, partitionIdx, pivot);
//   return partitionIdx;
// }

// function swap(arr, i, j) {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
// }

function quicksort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivot = right;
    let partitionIdx = partition(arr, left, right, pivot);
    quicksort(arr, left, partitionIdx - 1);
    quicksort(arr, partitionIdx + 1, right);
  }
  return arr;
}

function partition(arr, left, right, pivot) {
  let partitionIdx = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < arr[pivot]) {
      [arr[i], arr[partitionIdx]] = [arr[partitionIdx], arr[i]];
      partitionIdx++;
    }
  }
  [arr[partitionIdx], arr[pivot]] = [arr[pivot], arr[partitionIdx]];
  return partitionIdx;
}

const test = quicksort([3, 4, 7, 2, 8]);
console.log(test);
