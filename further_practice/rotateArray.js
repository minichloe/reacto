function rotate(arr, x) {
  const length = arr.length;
  arr = reverse(arr, 0, x - 1);
  arr = reverse(arr, x, length - 1);
  arr = reverse(arr, 0, length - 1);
  return arr;

  function reverse(arr, left, right) {
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
    return arr;
  }
}

const test = rotate([1, 2, 3, 4, 5], 2);
console.log(test);
