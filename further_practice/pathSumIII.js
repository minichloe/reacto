// Find number of paths that add up to sum

// Solution by traveling through each node
function pathSum(root, sum) {
  let count = 0;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (node) {
      stack.push(node.left);
      stack.push(node.right);
    }
    travel(node, sum);
  }
  return count;
  function travel(root, sum) {
    if (!root) return;
    if (root.val === sum) count++;
    travel(root.left, sum - root.val);
    travel(root.right, sum - root.val);
  }
}

// Solution by travelling and saving it to hashmap
