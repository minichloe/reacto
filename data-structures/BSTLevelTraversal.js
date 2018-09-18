function levelOrder(root) {
  if (!root) return [];
  const res = [[root.val]];
  const queue = [[root]];
  while (queue.length) {
    const temp = queue.shift();
    const tempVal = [];
    const tempNodes = [];
    temp.forEach(x => {
      if (x.left) {
        tempNodes.push(x.left);
        tempVal.push(x.left.val);
      }
      if (x.right) {
        tempNodes.push(x.right);
        tempVal.push(x.right.val);
      }
    });
    if (tempNodes.length) queue.push(tempNodes);
    if (tempVal.length) res.push(tempVal);
  }
  return res;
}
