// O(n) time, O(1) space
function hasCycle(head) {
  let node = head;
  if (!node || !node.next) return false;
  let fastNode = node.next;
  while (fastNode) {
    node = node.next;
    if (!fastNode.next) return false;
    fastNode = fastNode.next.next;
    if (node === fastNode) return true;
  }
  return false;
}

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
