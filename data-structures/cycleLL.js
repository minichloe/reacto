// O(n) time, O(1) space

// O(n) time and space
function hasCycle(head) {
  const nodes = new Set();
  let node = head;
  while (node) {
    if (nodes.has(node)) return true;
    else {
      nodes.add(node);
      node = node.next;
    }
  }
  return false;
}
