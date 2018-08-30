function strSort(str) {
  const map = {};
  for (let i = 0; i < str.length; i++) {
    if (map.hasOwnProperty(str[i])) map[str[i]] += 1;
    else map[str[i]] = 1;
  }
  const queue = new PQ();
  for (let x in map) {
    queue.insert(x, map[x]);
  }
  let resultStr = '';
  const length = queue.items.length;
  for (let i = 0; i < length; i++) {
    resultStr += queue.popMax();
  }
  return resultStr;
}

class Char {
  constructor(letter, count) {
    this.char = letter;
    this.count = count;
  }
}
class PQ {
  constructor() {
    this.items = [];
  }
  swap(idx1, idx2) {
    [this.items[idx1], this.items[idx2]] = [this.items[idx2], this.items[idx1]];
  }
  getChildIdx(idx) {
    return [idx * 2 + 1, idx * 2 + 2];
  }
  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }
  insert(char, count) {
    const item = new Char(char, count);
    this.items.push(item);
    this.heapifyUp();
  }
  heapifyUp() {
    let curr = this.items.length - 1;
    let parentIdx = this.getParentIdx(curr);
    while (
      curr > 0 &&
      (this.items[curr].count > this.items[parentIdx].count ||
        (this.items[curr].count === this.items[parentIdx].count &&
          this.items[curr].char.charCodeAt(0) <
            this.items[parentIdx].char.charCodeAt(0)))
    ) {
      this.swap(curr, parentIdx);
      curr = parentIdx;
      parentIdx = this.getParentIdx(curr);
    }
  }
  popMax() {
    const max = this.items[0];
    this.items[0] = this.items.pop();
    this.heapifyDown();
    let count = max.count;
    let str = max.char;
    while (count > 1) {
      str += max.char;
      count--;
    }
    return str;
  }
  heapifyDown() {
    let curr = 0;
    let [left, right] = this.getChildIdx(curr);
    let topIdx;
    while (left < this.items.length) {
      if (right < this.items.length) {
        if (this.items[left].count > this.items[right].count) topIdx = left;
        else if (
          this.items[left].count === this.items[right].count &&
          this.items[left].char.charCodeAt(0) <
            this.items[right].char.charCodeAt(0)
        )
          topIdx = left;
        else topIdx = right;
      } else topIdx = left;
      if (
        this.items[curr].count > this.items[topIdx].count ||
        (this.items[curr].count === this.items[topIdx].count &&
          this.items[curr].char.charCodeAt(0) <
            this.items[topIdx].char.charCodeAt(0))
      ) {
        this.swap(curr, topIdx);
        curr = topIdx;
        [left, right] = this.getChildIdx(curr);
      } else return;
    }
  }
}

const test = strSort('BLOOMBERG');
console.log(test);
