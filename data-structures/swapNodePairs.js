// Given a linked list, swap every two adjacent nodes and return its head.
// Given 1->2->3->4, you should return the list as 2->1->4->3.

function swapPairs(head) {
  if (!head || !head.next) return head;
  const dummy = new ListNode(0);
  dummy.next = head;
  let node = dummy;
  while (node.next) {
    let curr = node.next.next;
    if (!curr) break;
    let next = node.next;
    next.next = curr.next;
    node.next = curr;
    curr.next = next;
    node = node.next.next;
  }
  return dummy.next;
}

function swapPairsRecursive(head) {
  if (!head || !head.next) return head;
  head.next.next = swapPairsRecursive(head.next.next);
  let next = head.next;
  head.next = next.next;
  next.next - head;
  return next;
}
