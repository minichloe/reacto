function playlist(songs, k, q) {
  const indices = [];
  songs.forEach((x, i) => {
    if (x === q) indices.push(i);
  });
  for (let i = 0; i < indices.length; i++) {
    const curr = indices[i];
    const count1 = Math.abs(k - curr);
    const count2 = songs.length - count1;
    indices[i] = count1 > count2 ? count2 : count1;
  }
  return Math.min(...indices);
}
