function pathSum(root, sum) {
  const results = [];
  allPaths();
  function allPaths(root, sum, nums = []) {
    if (!root || root.val > sum) return;
    if (root.val === sum && !root.left && !root.right) {
      results.push([...num, root.val]);
      return;
    }
    return allPaths(root.left, sum - root.val, [...nums, root.val]) || allPaths(root.right, sum - root.val, [...nums, root.val]);
  }
  return results;
}
