const graph = {
  a: ['b'],
  b: ['c', 'd'],
  c: ['d'],
  d: [],
};

function doesPathExist(graph, point1, point2, visited = {}) {
  if (!graph[point1]) return false;
  visited[point1] = true;
  return graph[point1].some(x => {
    if (point2 === x) return true;
    if (!visited[x]) return doesPathExist(graph, x, point2, visited);
    else return false;
  });
}

// function doesPathExist(graph, point1, point2, visited = {}) {
//   if (!graph[point1]) return false;
//   visited[point1] = true;
//   return graph[point1].some(x => {
//     if (point2 === x) return true;
//     if (!visited[x]) {
//       return doesPathExist(graph, x, point2, visited);
//     } else {
//       return false;
//     }
//   });
// }

function helper() {
  const result = doesPathExist(graph, 'a', 'a');
  console.log(result);
}

helper();

// doesPathExist(graph, 'a', 'b'); // true
// doesPathExist(graph, 'b', 'a'); // false
// doesPathExist(graph, 'a', 'd'); // true
// doesPathExist(graph, 'a', 'a'); // false
