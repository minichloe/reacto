function threeSum(arr) {
  arr = arr.sort((a, b) => a - b);
  if (arr[0] > 0) return [];
  const res = [];
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] > 0) return res;
    if (i > 0 && arr[i] == arr[i - 1]) continue;
    let start = i + 1;
    let end = arr.length - 1;
    while (start < end) {
      const sum = arr[i] + arr[start] + arr[end];
      if (sum === 0) {
        res.push([arr[i], arr[start], arr[end]]);
        start++;
        end--;
        while (start < end && arr[start] === arr[start - 1]) start++;
        while (start < end && arr[end] === arr[end + 1]) end--;
      } else {
        sum > 0 ? end-- : start++;
      }
    }
  }
  return res;
}

function threeSumClosest(arr, target) {
  let res = Infinity;
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    let start = i + 1;
    let end = arr.length - 1;
    while (start < end) {
      const sum = arr[i] + arr[start] + arr[end];
      if (Math.abs(target - sum) < Math.abs(target - res)) res = sum;
      if (sum < target) {
        start++;
        while (arr[start] === arr[start - 1]) start++;
      } else {
        end--;
        while (arr[end] === arr[end + 1]) end--;
      }
    }
  }
  return res;
}
