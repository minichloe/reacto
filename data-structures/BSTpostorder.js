// Recursive solution
// function postorderTraversal(root) {
//   if (!root) return [];
//   return [
//     ...postorderTraversal(root.left),
//     ...postorderTraversal(root.right),
//     root.val,
//   ];
// }

// Iterative solution
function postorderTraversal(root) {
  if (!root) return [];
  const res = [];
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    res.unshift(node.val);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return res;
}
