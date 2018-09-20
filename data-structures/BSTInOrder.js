// Recursive solution
function inorderTraversal(root, res = []) {
  return [
    ...inorderTraversal(root.left),
    root.val,
    ...inorderTraversal(root.right),
  ];
}

// Iterative solution
