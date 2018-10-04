// Recursive solution
function isSymmetric(root) {
  if (!root) return true;
  function mirror(a, b) {
    if (!a && !b) return true;
    if (!a || !b || a.val !== b.val) return false;
    return mirror(a.left, b.right) && mirror(a.right, b.left);
  }
  return mirror(root.left, root.right);
}

// Iterative solution
function isSymmetricIterative(root) {
  if (!root || (!root.left && !root.right)) return true;
  if ((!root.left && root.right) || (!root.right && root.left)) return false;
  if (root.left.val !== root.right.val) return false;
  const queue = [[root.left, root.right]];
  while (queue.length) {
    const currList = queue.shift();
    const subList = [];
    while (currList.length) {
      const currNode = currList.shift();
      if (currNode) subList.push(currNode.left, currNode.right);
    }
    if (subList.length) {
      const symmetric = checkPalindrome(subList);
      if (!symmetric) return false;
      queue.push(subList);
    }
  }
  return true;
}

function checkPalindrome(list) {
  for (let i = 0, j = list.length - 1; i < j; i++, j--) {
    if (!list[i] && !list[j]) continue;
    if (!list[i] || !list[j] || list[i].val !== list[j].val) return false;
  }
  return true;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function createTree() {
  const tree = new TreeNode(1);
  tree.left = new TreeNode(2);
  tree.right = new TreeNode(2);
  tree.left.left = new TreeNode(3);
  // tree.left.right = new TreeNode(4);
  tree.right.left = new TreeNode(3);
  // tree.right.right = new TreeNode(4);
  return tree;
}

const tree = createTree();
const test = isSymmetricIterative(tree);
console.log(test);
