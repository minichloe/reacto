// Leetcode 817
function ListNode(val) {
  this.val = val;
  this.next = null;
}
const numComponents = function(head, G) {
  if (!head) return 0;
  G = new Set(G);
  let res = 0;
  let curr = true;
  while (head) {
    if (G.has(head.val) && curr) {
      res++;
      curr = false;
    } else if (!G.has(head.val)) {
      curr = true;
    }
    head = head.next;
  }
  return res;
};

const head = new ListNode(0);
head.next = new ListNode(1);
head.next.next = new ListNode(2);

const test = numComponents(head, [1, 0]);
console.log(test);
