// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
function detectCycle(head) {
  if (!head || !head.next || !head.next.next) return null;
  let slow = head.next;
  let fast = head.next.next;
  while (slow !== fast) {
    slow = slow.next;
    if (!fast.next.next) return null;
    fast = fast.next.next;
  }
  let fast = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return fast;
}
