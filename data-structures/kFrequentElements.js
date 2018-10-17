const topKFrequent = function(nums, k) {
  nums = nums.reduce((obj, k) => {
    if (obj[k]) obj[k]++;
    else obj[k] = 1;
    return obj;
  }, {});
  const queue = new PQ();
  for (let key in nums) {
    queue.insert(key, nums[key]);
  }
  const res = [];
  while (k--) {
    res.push(Number(queue.popTop()));
  }
  return res;
};
class Item {
  constructor(num, k) {
    this.num = num;
    this.k = k;
  }
}
class PQ {
  constructor() {
    this.items = [];
  }
  swap(i, j) {
    [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
  }
  getParent(i) {
    return Math.floor((i - 1) / 2);
  }
  getChild(i) {
    return [2 * i + 1, 2 * i + 2];
  }
  insert(num, k) {
    const item = new Item(num, k);
    this.items.push(item);
    this.heapUp();
  }
  heapUp() {
    let curr = this.items.length - 1;
    let pIdx = this.getParent(curr);
    while (curr > 0 && this.items[curr].k > this.items[pIdx].k) {
      this.swap(curr, pIdx);
      curr = pIdx;
      pIdx = this.getParent(curr);
    }
  }
  popTop() {
    const max = this.items[0];
    this.items[0] = this.items.pop();
    this.heapDown();
    return max.num;
  }
  heapDown() {
    let curr = 0;
    let [left, right] = this.getChild(curr);
    let top;
    while (left < this.items.length) {
      if (right < this.items.length) {
        top = this.items[left].k < this.items[right].k ? right : left;
      } else top = left;
      if (this.items[curr].k < this.items[top].k) {
        this.swap(curr, top);
        curr = top;
        [left, right] = this.getChild(curr);
      } else return;
    }
  }
}
