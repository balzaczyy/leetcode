/**
 * @param {number[][]} matrix
 * @return {number}
 */
const longestIncreasingPath = function (matrix) {
  const rowLen = matrix.length;
  const colLen = matrix[0].length;
  const store = Array(rowLen * colLen);
  const id = (y, x) => y * colLen + x;
  const seeds = Array(rowLen * colLen).fill(true);
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  // convert matrix to graph
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      const idx = id(i, j);
      const node = (store[idx] = {
        value: matrix[i][j],
        next: [],
        score: 1,
      });
      // check increasing nodes
      for (const d of dir) {
        const y = i + d[0];
        const x = j + d[1];
        if (x >= 0 && x < colLen && y >= 0 && y < rowLen) {
          if (matrix[y][x] > matrix[i][j]) {
            const next = id(y, x);
            node.next.push(next);
            seeds[next] = false;
          }
        }
      }
    }
  }

  // DFS from each seed to find the longest increasing path length
  const cache = new Map();
  /**
   * @param {number} idx
   * @returns {number}
   */
  function dfs(idx) {
    if (cache.has(idx)) {
      return cache.get(idx);
    }

    const node = store[idx];
    let ans = 1;
    for (const next of node.next) {
      ans = Math.max(ans, dfs(next) + 1);
    }
    cache.set(idx, ans);
    return ans;
  }
  //console.log('Start:');
  let ans = 0;
  seeds.forEach((ok, i) => {
    if (ok) {
      //console.log(Math.floor(i / colLen), i % colLen);
      ans = Math.max(ans, dfs(i));
    }
  });
  return ans;
};

export default function run(input) {
  return input.map(JSON.parse).map(longestIncreasingPath).map(String);
}
