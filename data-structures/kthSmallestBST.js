// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

function kthSmallest(root, k) {
  const dfs = [];
  inOrder(root);
  return dfs[k - 1];
  function inOrder(root) {
    if (root.left) inOrder(root.left);
    dfs.push(root.val);
    if (root.right) inOrder(root.right);
  }
}
