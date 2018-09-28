function isSameTree(p, q) {
  if ((p === null) & (q === null)) return true;
  else if (p && q) {
    if (p.val === q.val)
      return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    else return false;
  }
  return false;
}
