function pathSum(root, sum) {
  const results = [];
  allPaths(root, sum);
  function allPaths(root, sum, nums = []) {
    if (!root) return;
    nums.push(root.val);
    if (root.val === sum && !root.left && !root.right) results.push([...nums]);
    allPaths(root.left, sum - root.val, nums);
    allPaths(root.right, sum - root.val, nums);
    nums.pop();
  }
  return results;
}
