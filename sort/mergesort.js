// function split(arr) {
//   const mid = Math.floor(arr.length / 2);
//   return [arr.slice(0, mid), arr.slice(mid)];
// }

// function merge(left, right) {
//   const res = [];
//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       res.push(left.shift());
//     } else {
//       res.push(right.shift());
//     }
//   }
//   return [...res, ...left, ...right];
// }

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   let [left, right] = split(arr);
//   return merge(mergeSort(left), mergeSort(right));
// }

const test = mergeSort([100, 3, 4, 12, 86, 0, -1]);
console.log(test);

function split(arr) {
  const mid = Math.floor(arr.length / 2);
  return [arr.slice(0, mid), arr.slice(mid)];
}

function merge(arr1, arr2) {
  const newArr = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      newArr.push(arr1.shift());
    } else {
      newArr.push(arr2.shift());
    }
  }
  return newArr.concat([...arr1, ...arr2]);
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const [arr1, arr2] = split(arr);
  return merge(mergeSort(arr1), mergeSort(arr2));
}
