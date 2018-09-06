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
