function connect(root, next = null) {
  if (!root) return;
  root.next = next;
  connect(
    root.left,
    root.right
  );
  connect(
    root.right,
    root.next ? root.next.left : null
  );
}
