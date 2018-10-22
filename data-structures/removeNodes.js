function removeNodes(listHead, x) {
  if (!listHead) return listHead;
  listHead.next = removeNodes(listHead.next, x);
  if (listHead.data > x) return listHead.next;
  else return listHead;
}
