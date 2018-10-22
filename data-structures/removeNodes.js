function removeNodes(listHead, x) {
  if (!listHead) return listHead;
  listHead.next = removeNodes(listHead.next, x);
  if (listHead.data > x) return listHead.next;
  else return listHead;
}

const removeElements = function(head, val) {
  while (head && head.val === val) head = head.next;
  if (!head) return null;
  if (!head.next) return head;
  let prev = head;
  let curr = head.next;
  while (curr) {
    if (curr.val === val) {
      while (curr && curr.val === val) curr = curr.next;
      prev.next = curr;
      prev = prev.next;
      if (prev) curr = prev.next;
      else break;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  return head;
};
