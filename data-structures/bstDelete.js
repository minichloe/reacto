const deleteNode = (root, key) => {
  if (!root) return root;
  if (root.val === key) {
    if (!root.left || !root.right) return root.right || root.left;
    let next = root.right;
    while (next.left) next = next.left;
    next.left = root.left;
    return root.right;
  }
  if (key > root.val) root.right = deleteNode(root.right, key);
  else root.left = deleteNode(root.left, key);
  return root;
};
