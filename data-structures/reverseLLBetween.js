// Reverse a linked list from position m to n. Do it in one-pass.
function reverseBetweenOnePass(head, m, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let start = dummy;
  let startNext, end, endNext;
  let i = 0;
  while (i < n) {
    i++;
    if (i === m - 1) start = head;
    if (i === m) end = head;
    if (i <= m) head = head.next;
    if (i > m && i <= n) {
      startNext = start.next;
      endNext = head.next;
      start.next = head;
      head.next = startNext;
      end.next = endNext;
      head = endNext;
    }
  }
  return dummy.next;
}

function reverseBetween(head, m, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  while (--m) {
    prev = prev.next;
    --n;
  }
  let curr = prev.next;
  while (--n) {
    let next = curr.next;
    curr.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }
  return dummy.next;
}
