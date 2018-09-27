const maxArea = height => {
  let max = 0;
  let left = 0,
    right = height.length - 1;
  while (left < right) {
    const currBox = (right - left) * Math.min(height[left], height[right]);
    max = Math.max(max, currBox);
    height[left] <= height[right] ? left++ : right--;
  }
  return max;
};

const test = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log(test); // 49
