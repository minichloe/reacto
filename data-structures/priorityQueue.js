class Items {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PQ {
  constructor() {
    this.items = [];
  }
  _swap(parentIdx, childIdx) {
    [this.items[parentIdx], this.items[childIdx]] = [
      this.items[childIdx],
      this.items[parentIdx],
    ];
  }
  _getChildIdx(parentIdx) {
    return [parentIdx * 2 + 1, parentIdx * 2 + 2];
  }
  _getParentIdx(childIdx) {
    return Math.floor((childIdx - 1) / 2);
  }
  insert(value, priority) {
    const item = new Items(value, priority);
    this.items.push(item);
    this._heapifyUp();
  }
  _heapifyUp() {
    let currIdx = this.items.length - 1;
    while (
      currIdx > 0 &&
      this.items[currIdx].priority >
        this.items[this._getParentIdx(currIdx)].priority
    ) {
      this._swap(currIdx, this._getParentIdx(currIdx));
      currIdx = this._getParentIdx(currIdx);
    }
  }
  peek() {
    return this.items[0].value;
  }
  popMax() {
    const max = this.items[0];
    this.items[0] = this.items.pop();
    this._heapifyDown();
    return max.value;
  }
  _heapifyDown() {
    let currIdx = 0;
    let [left, right] = this._getChildIdx(currIdx);
    let highPriorityIdx;
    while (left < this.items.length) {
      if (right < this.items.length)
        highPriorityIdx =
          this.items[left].priority >= this.items[right].priority
            ? left
            : right;
      else highPriorityIdx = left;
      if (this.items[currIdx].priority < this.items[highPriorityIdx].priority) {
        this._swap(currIdx, highPriorityIdx);
        currIdx = highPriorityIdx;
        [left, right] = this._getChildIdx(highPriorityIdx);
      } else return;
    }
  }
}

const pq = new PQ();
pq.insert('Jill, concussion', 7);
pq.insert('John, stomach pain', 5);
console.log(pq.peek()); // ==> 'Jill, concussion'
pq.peek(); // ==> 'Jill, concussion'  // Jill is still in the PQ
pq.insert('Dave, sprained ankle', 1);
pq.insert('Bob, breathing problems', 8);
pq.peek(); // ==> 'Bob, breathing problems'
pq.popMax(); // ==> 'Bob, breathing problems'
pq.peek(); // ==> 'Jill, concussion' // Bob has been removed from the PQ
console.log(pq.popMax()); // ==> 'Jill, concussion'
console.log(pq.peek()); // ==> 'John, stomach pain'
