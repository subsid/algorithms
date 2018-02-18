function shortestPath(G, source, destination) {
  if (G.length === 0) {
    return -1
  }

  const distances = new Array(G.length).fill().map((v) => new Array(G.length).fill(Number.POSITIVE_INFINITY));

  for (let v = 0; v < distances.length; v++) {
    distances[v][0] = (v === source) ? 0 : Number.POSITIVE_INFINITY
  }

  for (let l = 0; l < distances[0].length; l++) {
    distances[source][l] = 0;
  }

  for (let l = 1; l < distances[0].length; l++) {
    for (let u = 0; u < G.length; u++) {
      for (let [w, v] of G[u]) {
        if ((distances[u][l - 1] + w) < distances[v][l - 1]) {
          distances[v][l] = distances[u][l - 1] + w;
        }
      }
    }
  }

  console.log(distances[destination])
  return distances[destination][G.length - 1];
}

const G = [[[1, 1], [4, 2]], [[1, 2], [4, 3]], [[1, 1], [1, 3]], []]
console.log(shortestPath(G, 0, 3) === 3)

module.exports = shortestPath
