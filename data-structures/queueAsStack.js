class Node {
  constructor(val, prev = null) {
    this.val = val;
    this.prev = prev;
    this.next = null;
  }
}

class MyQueue {
  constructor() {
    this.top = null;
    this.tail = null;
    this.length = 0;
  }
  empty() {
    return this.length === 0;
  }
  push(val) {
    if (this.top) {
      const temp = new Node(val, this.tail);
      this.tail.next = temp;
      this.tail = temp;
    } else {
      this.top = new Node(val);
      this.tail = this.top;
    }
    this.length++;
  }
  peek() {
    return this.top.val;
  }
  pop() {
    const temp = this.top;
    if (this.top === this.tail) {
      this.top = null;
      this.tail = null;
    } else {
      this.top = this.top.next;
    }
    this.length--;
    return this.top.val;
  }
}

const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek()); // 1
console.log(queue.pop()); // 1
console.log(queue.empty()); // false
