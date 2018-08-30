function copyRandomList(head) {
  if (!head) return null;
  const dummy = new RandomListNode();
  const map = new Map();
  let p = head;
  let list = dummy;
  while (p && !map.has(p)) {
    list.next = new RandomListNode(p.label);
    map.set(p, list.next);
    p = p.next;
    list = list.next;
  }
  for (let [p, list] of map) {
    list.random = map.get(p.random) || null;
  }
  return dummy.next;
}
