// Reverse LL iterative copy
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

// Reverse LL iterative
const reverseList = head => {
  if (!head || !head.next) return head;
  let dummy = null;
  while (head) {
    const node = head.next;
    head.next = dummy;
    dummy = head;
    head = node;
  }
  return dummy;
};

// Recursive solution
// const reverseList = (head, dummy = null) => {
//   if (!head) return dummy;
//   const node = new ListNode(head.val);
//   node.next = dummy;
//   dummy = node;
//   return reverseList(head.next, dummy);
// };
