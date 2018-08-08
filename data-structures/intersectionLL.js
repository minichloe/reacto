// Hashtable/Map Time: O(m+n) Space: O(m) or O(n)
// const getIntersectionNode = function(headA, headB) {
//   const set = new Set();
//   while (headA) {
//     set.add(headA.val);
//     headA = headA.next;
//   }
//   while (headB) {
//     if (set.has(headB.val)) return headB;
//     headB = headB.next;
//   }
//   return null;
// };

// Two pointers. Time: O(m+n) Space: O(1)
const getIntersectionNode = function(headA, headB) {
  let a = headA,
    b = headB;
  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
};
