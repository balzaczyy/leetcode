/**
 * @param {number[][]} heights
 * @return {number}
 */
const minimumEffortPath = function (heights) {
  const rows = heights.length;
  const cols = heights[0].length;
  const visited = Array(rows * cols);
  const id = (row, col) => row * cols + col;
  visited[0] = { row: 0, col: 0, effort: 0 };
  const q = [visited[0]];
  const tryMove = (row, col, h, effort) => {
    const s = visited[id(row, col)];
    if (!s) {
      const e = Math.max(effort, Math.abs(heights[row][col] - h));
      const s = { row, col, effort: e };
      visited[id(row, col)] = s;
      q.push(s);
    } else {
      const e = Math.max(effort, Math.abs(heights[row][col] - h));
      s.effort = Math.min(s.effort, e);
    }
  };

  while (q.length > 0) {
    const { row, col, effort } = q.shift();
    // console.log(row, col, effort);
    if (row === rows - 1 && col === cols - 1) {
      return effort;
    }
    const h = heights[row][col];
    if (row > 0) tryMove(row - 1, col, h, effort);
    if (row < rows - 1) tryMove(row + 1, col, h, effort);
    if (col > 0) tryMove(row, col - 1, h, effort);
    if (col < cols - 1) tryMove(row, col + 1, h, effort);
    q.sort((a, b) => a.effort - b.effort);
    // console.log(q);
  }
  throw new Error("impossible");
};

export default function run(input) {
  return input.map(JSON.parse).map(minimumEffortPath).map(String);
}
