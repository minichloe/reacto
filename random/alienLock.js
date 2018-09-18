function alienLock(arr1, arr2, chars) {
  chars = chars.reduce((map, key, idx) => {
    map[key] = idx;
    return map;
  }, {});
  let rotations = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (map[arr1[i]] === map[arr2[i]]) continue;
    else {
    }
  }
}
