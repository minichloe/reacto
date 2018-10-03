// Recursive solution
function isSymmetric(root) {
  if (!root) return true;
  function mirror(a, b) {
    if (!a && !b) return true;
    if (!a || !b || a.val !== b.val) return false;
    return mirror(a.left, b.right) && mirror(a.right, b.left);
  }
  return mirror(root.left, root.right);
}
