function levelOrder(root) {
  if (!root) return [];
  const res = [[root.val]];
  const queue = [root];
  while (queue.length) {
    const temp = queue.shift();
    const tempVal = [];
    if (temp.left) {
      queue.push(temp.left);
      tempVal.push(temp.left.val);
    }
    if (temp.right) {
      queue.push(temp.right);
      tempVal.push(temp.right.val);
    }
    if (tempVal.length) res.push(tempVal);
  }
  return res;
}
