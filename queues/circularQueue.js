function circularQueue(size) {
  this.queue = new Array(size);
  this.size = size;
  this.front = 0;
  this.end = 0;
}
circularQueue.enQueue = function(val) {};
