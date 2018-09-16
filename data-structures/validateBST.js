// function isValidBST(root) {
//   if (!root) return true;
//   return (function check(root, min = -Infinity, max = Infinity) {
//     if (!root) return true;
//     if (root.val >= max || root.val <= min) return false;
//     return check(root.left, min, root.val) && check(root.right, root.val, max);
//   })(root);
// }

function isValidBST(root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.val >= max || root.val <= min) return false;
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
}
