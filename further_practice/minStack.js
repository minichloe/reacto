const MinStack = () => {
  this.min = null;
  this.stack = [];
};

MinStack.prototype.push = function(val) {
  this.stack.push(val);
  if (this.min === null || val < this.min) this.min = val;
};

MinStack.prototype.pop = function() {
  const val = this.stack.pop();
  this.min = Math.min(...this.stack);
};

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
  return this.min;
};
