function circularQueue(size) {
  this.queue = new Array(size).fill(null);
  this.size = size;
  this.front = this.queue[0];
  this.end = 0;
}
circularQueue.enQueue = function(val) {
  if (this.end === this.size) return false;
  if (this.front === null) this.queue[0] = val;
  else this.queue[this.end] = val;
  this.end++;
  return true;
};

circularQueue.deQueue = function() {
  if (this.end === null) return false;
  const idx = this.end === this.size ? this.end - 1 : this.end;
  this.queue[idx] = null;
  this.end--;
  return true;
};

circularQueue.Front = function() {
  return this.front || -1;
};

circularQueue.Rear = function() {
  return this.end === this.size
    ? this.queue[this.end - 1]
    : this.queue[this.end];
};

circularQueue.isEmpty = function() {
  return this.front === null;
};

circularQueue.isFull = function() {
  return this.end === this.size;
};
