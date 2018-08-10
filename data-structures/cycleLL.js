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
