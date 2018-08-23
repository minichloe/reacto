function renameFiles(arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (!map.hasOwnProperty(arr[i])) {
      map[arr[i]] = 1;
    } else {
      arr[i] = arr[i] + map[arr[i]];
      map[arr[i]] += 1;
    }
  }
  return arr;
}

const test = renameFiles(['bob', 'alice', 'bob', 'alice', 'bob']);
console.log(test);
