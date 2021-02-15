/**
 * @param {number[][]} graph
 * @return {boolean}
 */
const isBipartite = function (graph) {
  const s1 = new Set();
  const s2 = new Set();
  for (let i = 0; i < graph.length; i++) {
    if (graph[i].length === 1) {
      continue;
    }
    for (let j = 0; j < graph[i].length; j++) {
      const inS1 = s1.has(i);
      const inS2 = s2.has(i);
      if (inS1 && inS2) {
        return false;
      }
      const t = graph[i][j];
      if (inS1) {
        s2.add(t);
      } else {
        s1.add(t);
      }
    }
  }
  return true;
};

export default function run(input) {
  return input.map(JSON.parse).map(isBipartite).map(String);
}
