// Find number of paths that add up to sum

// Solution by traveling through each node
function pathSum(root, sum) {
  let count = 0;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (node) {
      stack.push(node.left);
      stack.push(node.right);
    }
    travel(node, sum);
  }
  return count;
  function travel(root, sum) {
    if (!root) return;
    if (root.val === sum) count++;
    travel(root.left, sum - root.val);
    travel(root.right, sum - root.val);
  }
}

// Solution by travelling and saving it to hashmap
function pathSumHash(root, sum) {
  const map = {};
  return travelMap(root, 0);

  function travelMap(node, currSum) {
    if (!node) return 0;
    currSum += node.val;
    let totalPaths = map[currSum - sum] || 0;
    if (currSum === sum) totalPaths++;
    if (map[currSum]) map[currSum]++;
    else map[currSum] = 1;
    totalPaths += travelMap(node.left, currSum);
    totalPaths += travelMap(node.right, currSum);
    map[currSum]--;
    return totalPaths;
  }
}
