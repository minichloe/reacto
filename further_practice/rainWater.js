function trap(blocks) {
  const rightBlocks = [];
  let rightMax = 0;
  for (let i = blocks.length - 1; i >= 0; i--) {
    rightMax = Math.max(rightMax, blocks[i]);
    rightBlocks[i] = rightMax;
  }
  let water = 0;
  let leftMax = 0;
  for (let i = 0; i < blocks.length; i++) {
    leftMax = Math.max(leftMax, blocks[i]);
    rightMax = rightBlocks[i];
    water += Math.min(leftMax, rightMax) - blocks[i];
  }
  return water;
}

const a = [0, 0, 1, 2, 4, 3, 2, 5, 0, 0, 2, 1];
console.log(a); // 7

const b = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(b); // 6

const c = [0, 3, 0, 1, 0, 0, 0, 1, 0, 2];
console.log(c); // 12

const d = [0, 1, 0, 3, 5, 0, 0, 0, 2, 0, 1];
console.log(d); // 8

const e = [0, 5, 3, 2, 8, 8, 1, 1, 2, 4, 3, 3, 7, 1, 2, 4, 3, 2];
console.log(e); // 38
