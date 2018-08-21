const removeNthFromEnd = function(head, n) {
  let fastNode = head.next;
  node = head;
  while (fastNode) {
    fastNode = fastNode.next;
    n > 0 ? n-- : (node = node.next);
  }
  if (n === 1) return head.next;
  node.next = node.next.next || null;
  return head;
};
