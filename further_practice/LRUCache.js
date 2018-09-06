class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }
  get(key) {
    if (this.map.get(key) !== undefined) return this.map.get(key);
    else return -1;
  }
}
