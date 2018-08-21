const removeNthFromEnd = function(head, n) {
  let fastNode = head;
  while (fastNode && n >= 0) {
    fastNode = fastNode.next;
    n--;
  }
  let node = head;
  while (node.next !== fastNode) {
    node = node.next;
    if (!node.next) return head;
  }
  let nextNode = node.next.next;
  node.next = nextNode;
  return head;
};
