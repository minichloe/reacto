// Given a linked list and a number (num < LL length)
// Return the nth from the last value in the link list
// Eg. LL: 11 -> 22 -> 33 -> 44 -> 55, num: 3; return 33;

function traverseNode(startNode, num) {
  let fastNode = startNode;
  while (num >= 0) {
    fastNode = fastNode.next;
    num--;
  }
  while (fastNode) {
    startNode = startNode.next;
    fastNode = fastNode.next;
  }
  return startNode;
}

// Access middle of linked list
function getMiddle(startNode) {
  let fastNode = startNode;
  while (fastNode) {
    startNode = startNode.next;
    fastNode = fastNode.next.next;
  }
  return startNode;
}
