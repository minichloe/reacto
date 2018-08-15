// Find intersecting values in two arrays O(n) time and space
function intersection(arr1, arr2) {
  const arr1Set = new Set(arr1);
  return arr2.filter(x => arr1Set.has(x));
}

const test = intersection([1, 4, 9, 10, 11], [2, 3, 4, 5, 8, 10]);
console.log(test);
