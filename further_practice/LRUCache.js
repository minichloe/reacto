class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }
  get(key) {
    if (this.map.has(key)) {
      const val = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, val);
      return val;
    } else return -1;
  }
  put(key, val) {
    this.map.set(key, val);
    let keys = this.map.keys();
    while (this.map.size > this.capacity) {
      this.map.delete(keys.next().value);
    }
  }
}

const cache = new LRUCache(2);
