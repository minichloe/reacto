// O(n) time, O(1) space
function hasCycle(head) {
  if (!head || !head.next) return false;
  let slowNode = head;
  let fastNode = head.next;
  while (slowNode !== fastNode) {
    if (!fastNode || !fastNode.next) return false;
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
  }
  return true;
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
