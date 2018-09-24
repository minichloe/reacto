// Given preorder and inorder traversal of a tree (array), construct the binary tree.
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

// function buildTree(preorder, inorder) {
//   if (!preorder.length || !inorder.length) return null;
//   const val = preorder[0];
//   const tree = new TreeNode(val);
//   // Find root in inorder, and everything left of position are the number of left nodes
//   let position = inorder.indexOf(val);
//   tree.left = buildTree(
//     preorder.slice(1, position + 1),
//     inorder.slice(0, position)
//   );
//   tree.right = buildTree(
//     preorder.slice(position + 1),
//     inorder.slice(position + 1)
//   );
//   return tree;
// }

// Optimized solution by caching values and index of inorder instead of using indexOf
function buildTree(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  const map = inorder.reduce((obj, val, idx) => {
    obj[val] = idx;
    return obj;
  }, {});
  return helper(0, 0, preorder.length);

  function helper(preIdx, inIdx, length) {
    const root = new TreeNode(preorder[preIdx]);

    const leftLength = map[root.val] - inIdx;
    if (leftLength) root.left = helper(preIdx + 1, inIdx, leftLength);

    const rightLength = length - leftLength - 1;
    if (rightLength)
      root.right = helper(
        preIdx + 1 + leftLength,
        inIdx + leftLength + 1,
        rightLength
      );
    return root;
  }
}
