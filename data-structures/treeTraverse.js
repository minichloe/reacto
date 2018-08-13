function node(value) {
  return {
    value,
    children: [],
  };
}

const a = node('a');
const b = node('b');
const c = node('c');
const d = node('d');
const e = node('e');
const f = node('f');
const g = node('g');
const h = node('h');
const i = node('i');
const j = node('j');
const k = node('k');
const l = node('l');
const m = node('m');

a.children.push(b, c, d);
b.children.push(e);
e.children.push(k, l);
c.children.push(f, g, h);
h.children.push(m);
d.children.push(i, j);

const callback = v => callbackArr.push(v);
const callbackArr = [];

function breadthFirst(startNode, callback) {
  const queue = [startNode];
  while (queue.length) {
    const firstNode = queue.shift();
    queue.push(...firstNode.children);
    callback(firstNode.value);
  }
}

function depthFirstPreOrder(startNode, callback) {
  callback(startNode.value);
  startNode.children.forEach(x => {
    depthFirstPreOrder(x, callback);
  });
}

function depthFirstPostOrder(startNode, callback) {
  startNode.children.forEach(x => {
    depthFirstPostOrder(x, callback);
  });
  callback(startNode.value);
}

breadthFirst(a, callback);
// depthFirstPreOrder(a, callback);
// depthFirstPostOrder(a, callback);
console.log(callbackArr);
