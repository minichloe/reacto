const maxArea = height => {
  let max = 0;
  let left = 0,
    right = height.length - 1;
  while (left < right) {
    const currBox = (right - left) * Math.min(height[left], height[j]);
    max = Math.max(max, currBox);
    height[left] <= height[right] ? left++ : right--;
  }
  return max;
};
