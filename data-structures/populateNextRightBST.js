// Recursive approach only for complete binary trees
function connect(root, next = null) {
  if (!root) return;
  root.next = next;
  connect(
    root.left,
    root.right
  );
  connect(
    root.right,
    root.next ? root.next.left : null
  );
}

// Solution by breadth first search then connecting
function connectWithBFS(root) {
  if (!root) return;
  const queue = [root];
  while (queue.length) {
    const size = queue.length;
    const copy = queue.slice();
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      node.next = copy[i + 1] || null;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
}
