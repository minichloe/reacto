// Given preorder and inorder traversal of a tree (array), construct the binary tree.
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function buildTree(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  const val = preorder[0];
  const tree = new TreeNode(val);
  // Find root in inorder, and everything left of position are the number of left nodes
  let position = inorder.indexOf(val);
  tree.left = buildTree(
    preorder.slice(1, position + 1),
    inorder.slice(0, position)
  );
  tree.right = buildTree(
    preorder.slice(position + 1),
    inorder.slice(position + 1)
  );
  return tree;
}
