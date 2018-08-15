// Find intersecting values in two arrays O(n) time and space
function intersection(arr1, arr2) {
  const arr1Set = new Set(arr1);
  return arr2.filter(x => arr1Set.has(x));
}

// Racheting using two pointers on both ends, but only works with sorted arrays.
// O(n*logn) assuming sort is performant

function intersectionSorted(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  const res = [];
  let i = 0;
  j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      res.push(arr1[i]);
      i++;
      j++;
    } else {
      arr1[i] > arr2[j] ? j++ : i++;
    }
  }
  return res;
}

const test = intersection([1, 4, 9, 10, 11], [2, 3, 4, 5, 8, 10]);
const test2 = intersectionSorted([5, 4, 1, 7, 2], [4, 2, 3, 5]);
console.log(test, test2);
