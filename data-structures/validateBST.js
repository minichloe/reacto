function isValidBST(root) {
  if (root.left) {
    if (root.left.val > root.val) return false;
    else root.left = isValidBST(root.left);
  }
  if (root.right) {
    if (root.right.val < root.val) return false;
    else root.right = isValidBST(root.right);
  }
  return true;
}
