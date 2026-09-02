const floydWarshall = (graph) => {
  const dist = [];
  const { length } = graph;

  // 1
  for (let i = 0; i < length; i++) {
    dist[i] = [];
    for (let j = 0; j < length; j++) {
      if (i === j) {
        dist[i][j] = 0; // 2
      } else if (!isFinite(graph[i][j])) {
        dist[i][j] = Infinity; // 3
      } else {
        dist[i][j] = graph[i][j]; // 4
      }
    }
  }
  // 5
  for (let k = 0; k < length; k++) {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        // 6
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j]; // 7
        }
      }
    }
  }
  return dist;
};
