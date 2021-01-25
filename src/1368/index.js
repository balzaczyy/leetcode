/**
 * @param {number[][]} grid
 * @return {number}
 */
const minCost = function (grid) {
  const rowSize = grid.length;
  const colSize = grid[0].length;
  const id = (row, col) => row * colSize + col;
  const visited = new Map();
  const q = []; // BFS

  q.push({ row: 0, col: 0, cost: 0 });
  while (q.length > 0) {
    let { row, col, cost } = q.shift();
    if (visited.has(id(row, col))) {
      continue;
    }

    while (
      row >= 0 &&
      row < rowSize &&
      col >= 0 &&
      col < colSize &&
      !visited.has(id(row, col))
    ) {
      if (row === rowSize - 1 && col === colSize - 1) {
        return cost;
      }

      visited.set(id(row, col), cost);
      // mark neighbors
      if (grid[row][col] !== 4 && row > 0 && !visited.has(id(row - 1, col))) {
        q.push({ row: row - 1, col, cost: cost + 1 });
      }
      if (
        grid[row][col] !== 3 &&
        row < rowSize - 1 &&
        !visited.has(id(row + 1, col))
      ) {
        q.push({ row: row + 1, col, cost: cost + 1 });
      }
      if (grid[row][col] !== 2 && col > 0 && !visited.has(id(row, col - 1))) {
        q.push({ row, col: col - 1, cost: cost + 1 });
      }
      if (
        grid[row][col] !== 1 &&
        col < colSize - 1 &&
        !visited.has(id(row, col + 1))
      ) {
        q.push({ row, col: col + 1, cost: cost + 1 });
      }
      switch (grid[row][col]) {
        case 1:
          col++;
          break;
        case 2:
          col--;
          break;
        case 3:
          row++;
          break;
        case 4:
          row--;
          break;
      }
    }
  }

  throw new Error("impossible");
};

export default function run(input) {
  return input.map(JSON.parse).map(minCost).map(String);
}
