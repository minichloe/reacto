// Recursive solution
function inorderTraversal(root) {
  if (!root) return [];
  return [
    ...inorderTraversal(root.left),
    root.val,
    ...inorderTraversal(root.right),
  ];
}

// Iterative solution
function inorderTraversal(root) {
  const res = [];
  if (!root) return res;
  const stack = [root];
  let currNode = root.left;
  while (currNode || stack.length) {
    while (currNode) {
      stack.push(currNode);
      currNode = currNode.left;
    }
    currNode = stack.pop();
    res.push(currNode.val);
    currNode = currNode.right;
  }
  return res;
}
