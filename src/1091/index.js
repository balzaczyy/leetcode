/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = function (grid) {
  const n = grid.length;
  const q = [];
  function tryVisit(r, c, d) {
    if (r >= 0 && r < n && c >= 0 && c < n && grid[r][c] === 0) {
      grid[r][c] = 1;
      q.push([r, c, d + 1]);
      return true;
    }
    return false;
  }
  if (tryVisit(0, 0, 0)) {
    while (q.length > 0) {
      const [r, c, d] = q.shift();
      if (r === n - 1 && c === n - 1) {
        return d;
      }
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          tryVisit(r + i, c + j, d);
        }
      }
    }
  }
  return -1;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(shortestPathBinaryMatrix)
    .map((v) => JSON.stringify(v));
}
