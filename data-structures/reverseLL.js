const reverseList = head => {
  if (!head) return head;
  let list = head;
  let dummy = new ListNode(list.val);
  while (list.next) {
    list = list.next;
    const node = new ListNode(list.val);
    node.next = dummy;
    dummy = node;
  }
  return dummy;
};
