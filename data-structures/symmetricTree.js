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
  if (!root) return true;
  if ((!root.left && root.right) || (!root.right && root.left)) return false;
  const queue = [root];
  while (queue.length) {
    const currNode = queue.shift();
  }
}

function checkPalindrome(list) {
  for (let i = 0, j = list.length - 1; i < j; i++, j--) {
    if (list[i] !== list[j]) return false;
  }
  return true;
}

const test = checkPalindrome([1, 2, 3, 2, 1]);
console.log(test);
