function renameFiles(arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (!map.hasOwnProperty(arr[i])) {
      map[arr[i]] = 0;
    } else {
      map[arr[i]] = map[arr[i]] + 1;
      arr[i] = arr[i] + map[arr[i]];
      console.log(map);
    }
  }
  return arr;
}

const test = renameFiles(['bob', 'alice', 'bob', 'alice', 'bob']);
console.log(test);
