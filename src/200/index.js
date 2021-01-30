/**
 * @param {string[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Map();
  const id = (i, j) => i * cols + j;

  let next = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "0" || visited.has(id(i, j))) {
        continue;
      }

      next++;
      const q = [[i, j]];
      function visit(row, col, value) {
        const key = id(row, col);
        if (grid[row][col] === "1" && !visited.has(key)) {
          visited.set(key, value);
          q.push([row, col]);
        }
      }

      while (q.length > 0) {
        const [row, col] = q.shift();
        if (row > 0) visit(row - 1, col, next);
        if (row < rows - 1) visit(row + 1, col, next);
        if (col > 0) visit(row, col - 1, next);
        if (col < cols - 1) visit(row, col + 1, next);
      }
    }
  }

  return next;
};

export default function run(input) {
  return input.map(JSON.parse).map(numIslands).map(String);
}
