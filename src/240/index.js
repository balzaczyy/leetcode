import { group } from "../utils.js";

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  function search(r1, c1, r2, c2) {
    // console.log(r1,c1,r2,c2);
    if ((r2 - r1) * (c2 - c1) <= 10) {
      for (let i = r1; i < r2; i++) {
        for (let j = c1; j < c2; j++) {
          if (matrix[i][j] === target) {
            return true;
          }
        }
      }
      return false;
    }

    const r = Math.floor((r1 + r2) / 2);
    const c = Math.floor((c1 + c2) / 2);
    const m = matrix[r][c];
    if (target < m) {
      return search(r1, c1, r, c2) || search(r, c1, r2, c);
    } else if (target > m) {
      return search(r1, c + 1, r2, c2) || search(r + 1, c1, r2, c + 1);
    }
    return true;
  }
  return search(0, 0, matrix.length, matrix[0].length);
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([matrix, target]) => searchMatrix(matrix, target))
    .map(String);
}
