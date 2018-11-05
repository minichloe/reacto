function pathSum(root, sum) {
  const results = [];
  allPaths(root, sum);
  function allPaths(root, sum, nums = []) {
    if (!root) return;
    if (root.val === sum && !root.left && !root.right) {
      results.push([...nums, root.val]);
      return;
    }
    return allPaths(root.left, sum - root.val, [...nums, root.val]) || allPaths(root.right, sum - root.val, [...nums, root.val]);
  }
  return results;
}
