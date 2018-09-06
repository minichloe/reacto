// const reverseList = head => {
//   if (!head) return head;
//   let dummy = new ListNode(head.val);
//   while (head.next) {
//     head = head.next;
//     const node = new ListNode(head.val);
//     node.next = dummy;
//     dummy = node;
//   }
//   return dummy;
// };

// Recursive solution
// const reverseList = (head, dummy = null) => {
//   if (!head) return dummy;
//   const node = new ListNode(head.val);
//   node.next = dummy;
//   dummy = node;
//   return reverseList(head.next, dummy);
// };
