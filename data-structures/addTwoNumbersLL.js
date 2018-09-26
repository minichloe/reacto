// Unoptimized way to run through both lists taking out the values, then doing final loop to add numbers together
function addTwoNumbersSlow(l1, l2) {
  let p1 = l1,
    p2 = l2;
  const s1 = [],
    s2 = [];
  while (p1) {
    s1.push(p1.val);
    p1 = p1.next;
  }
  while (p2) {
    s2.push(p2.val);
    p2 = p2.next;
  }
  let sum = 0;
  let list = new ListNode(0);
  while (s1.length || s2.length) {
    if (s1.length) sum += s1.pop();
    if (s2.length) sum += s2.pop();
    list.val = sum % 10;
    sum = Math.floor(sum / 10);
    let head = new ListNode(sum);
    head.next = list;
    list = head;
  }
  return list.val === 0 ? list.next : list;
}
