function threeSum(arr) {
  arr = arr.sort((a, b) => a - b);
  if (arr[0] > 0) return [];
  const res = [];
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] > 0) return res;
    if (i > 0 && arr[i] == arr[i - 1]) continue;
    let start = i + 1;
    let end = arr.length - 1;
    while (start < end) {
      const sum = arr[i] + arr[start] + arr[end];
      if (sum === 0) {
        res.push([arr[i], arr[start], arr[end]]);
        start++;
        end--;
        while (start < end && arr[start] === arr[start - 1]) start++;
        while (start < end && arr[end] === arr[end + 1]) end--;
      } else {
        sum > 0 ? end-- : start++;
      }
    }
  }
  return res;
}

function threeSumClosest(arr, target) {
  let res = Infinity;
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    let start = i + 1;
    let end = arr.length - 1;
    while (start < end) {
      const sum = arr[i] + arr[start] + arr[end];
      if (Math.abs(target - sum) < Math.abs(target - res)) res = sum;
      if (sum < target) {
        start++;
        while (arr[start] === arr[start - 1]) start++;
      } else {
        end--;
        while (arr[end] === arr[end + 1]) end--;
      }
    }
  }
  return res;
}

function removeNode(head, n) {
  if (!head) return head;
  let node = head;
  let fast = head;
  while (n) {
    fast = fast.next;
    n--;
  }
  if (!fast) return node.next;
  while (fast.next) {
    fast = fast.next;
    node = node.next;
  }
  node.next = node.next.next;
  return head;
}

function prefix(arr) {
  if (!arr.length) return '';
  arr.map(x => x.toLowerCase());
  let res = 0;
  for (let i = 0; i < arr[0].length; i++) {
    let pre = true;
    const char = arr[0][i];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] !== char) {
        pre = false;
        break;
      }
    }
    if (pre) res += 1;
    else break;
  }
  return arr[0].substring(0, res);
}
