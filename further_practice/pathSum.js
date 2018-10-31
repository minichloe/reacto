function hasPathSum(root, sum) {
  if (!root || root.val > sum) return false;
  if (root.val === sum) return true;
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
}
