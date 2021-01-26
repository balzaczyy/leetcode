/**
 * @param {string[]} grid
 * @return {number}
 */
const regionsBySlashes = function (grid) {
  // divide each grid into two parts, upper and down
  const n = grid.length;
  const colors = Array(n * n * 2);
  const id = (i, j, k) => (i * n + j) * 2 + k;
  const UP = 0,
    DOWN = 1;
  let next = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < 2; k++) {
        const color = colors[id(i, j, k)];
        if (color) {
          continue; // visited
        }

        next++;

        // BFS to color the area
        const q = [{ row: i, col: j, sli: k }];
        function tryMoveLeft(row, col) {
          if (col > 0) {
            switch (grid[row][col - 1]) {
              case "/":
                if (!colors[id(row, col - 1, DOWN)]) {
                  q.push({ row, col: col - 1, sli: DOWN });
                }
                break;
              case "\\":
                if (!colors[id(row, col - 1, UP)]) {
                  q.push({ row, col: col - 1, sli: UP });
                }
                break;
              default:
                if (!colors[id(row, col - 1, DOWN)]) {
                  q.push({ row, col: col - 1, sli: DOWN });
                }
                if (!colors[id(row, col - 1, UP)]) {
                  q.push({ row, col: col - 1, sli: UP });
                }
                break;
            }
          }
        }
        function tryMoveRight(row, col) {
          if (col < n - 1) {
            switch (grid[row][col + 1]) {
              case "/":
                if (!colors[id(row, col + 1, UP)]) {
                  q.push({ row, col: col + 1, sli: UP });
                }
                break;
              case "\\":
                if (!colors[id(row, col + 1, DOWN)]) {
                  q.push({ row, col: col + 1, sli: DOWN });
                }
                break;
              default:
                if (!colors[id(row, col + 1, UP)]) {
                  q.push({ row, col: col + 1, sli: UP });
                }
                if (!colors[id(row, col + 1, DOWN)]) {
                  q.push({ row, col: col + 1, sli: DOWN });
                }
                break;
            }
          }
        }
        function tryMoveUp(row, col) {
          if (row > 0) {
            switch (grid[row - 1][col]) {
              case "/":
                if (!colors[id(row - 1, col, DOWN)]) {
                  q.push({ row: row - 1, col, sli: DOWN });
                }
                break;
              case "\\":
                if (!colors[id(row - 1, col, DOWN)]) {
                  q.push({ row: row - 1, col, sli: DOWN });
                }
                break;
              default:
                if (!colors[id(row - 1, col, DOWN)]) {
                  q.push({ row: row - 1, col, sli: DOWN });
                }
                if (!colors[id(row - 1, col, DOWN)]) {
                  q.push({ row: row - 1, col, sli: DOWN });
                }
                break;
            }
          }
        }
        function tryMoveDown(row, col) {
          if (row < n - 1) {
            switch (grid[row + 1][col]) {
              case "/":
                if (!colors[id(row + 1, col, UP)]) {
                  q.push({ row: row + 1, col, sli: UP });
                }
                break;
              case "\\":
                if (!colors[id(row + 1, col, UP)]) {
                  q.push({ row: row + 1, col, sli: UP });
                }
                break;
              default:
                if (!colors[id(row + 1, col, UP)]) {
                  q.push({ row: row + 1, col, sli: UP });
                }
                if (!colors[id(row + 1, col, UP)]) {
                  q.push({ row: row + 1, col, sli: UP });
                }
                break;
            }
          }
        }
        function trySameGrid(row, col, sli) {
          const other = (sli + 1) % 2;
          if (!colors[id(row, col, other)]) {
            q.push({ row, col, sli: other });
          }
        }

        while (q.length > 0) {
          let { row, col, sli } = q.shift();
          colors[id(row, col, sli)] = next;
          switch (grid[row][col]) {
            case "/":
              if (sli === UP) {
                tryMoveLeft(row, col);
                tryMoveUp(row, col);
              } else {
                tryMoveRight(row, col);
                tryMoveDown(row, col);
              }
              break;
            case "\\":
              if (sli === UP) {
                tryMoveUp(row, col);
                tryMoveRight(row, col);
              } else {
                tryMoveLeft(row, col);
                tryMoveDown(row, col);
              }
              break;
            default:
              // space
              tryMoveLeft(row, col);
              tryMoveUp(row, col);
              tryMoveRight(row, col);
              tryMoveDown(row, col);
              trySameGrid(row, col, sli);
              break;
          }
        }
      }
    }
  }
  // for (let i = 0; i < n; i ++) {
  //   const arr = [];
  //   for (let j = 0; j < n; j ++) {
  //     const u = String(colors[id(i,j,UP)]);
  //     const d = String(colors[id(i,j,DOWN)]);
  //     switch (grid[i][j]) {
  //       case '/':
  //         arr.push(`${u}/${d}`);
  //         break;
  //       case '\\':
  //         arr.push(`${d}\\${u}`);
  //         break;
  //       default:
  //         if (u !== d) throw new Error('impossible');
  //         arr.push(` ${u} `);
  //         break;
  //     }
  //   }
  //   console.log(arr.join(' '));
  // }
  return next;
};

export default function run(input) {
  return input.map(JSON.parse).map(regionsBySlashes).map(String);
}
