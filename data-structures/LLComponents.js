// Leetcode 817
function ListNode(val) {
  this.val = val;
  this.next = null;
}
const numComponents = function(head, G) {
  if (!head) return 0;
  const map = {};
  while (head) {
    const key = head.val;
    map[key] = head.next ? head.next.val : null;
    head = head.next;
  }
  G = new Set(G);
  let res = 0;
  G.forEach(x => {
    if (map[x] !== undefined) {
      res++;
      G.delete(x);
      G.delete(map[x]);
    }
  });
  return res;
};

const head = new ListNode(0);
head.next = new ListNode(1);
head.next.next = new ListNode(2);

const test = numComponents(head, [1, 0]);
console.log(test);
