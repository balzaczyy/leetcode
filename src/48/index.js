/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  const d = matrix.length;
  (function xy(matrix) {
    for (let i = 0; i < d; i++) {
      for (let j = i + 1; j < d; j++) {
        const t = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = t;
      }
    }
  })(matrix);
  // console.log(matrix);
  (function mirrorX(matrix) {
    for (let i = 0; i < d; i++) {
      for (let j = 0; j < d / 2; j++) {
        const t = matrix[i][j];
        matrix[i][j] = matrix[i][d - 1 - j];
        matrix[i][d - 1 - j] = t;
      }
    }
  })(matrix);
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map((v) => {
      rotate(v);
      return v;
    })
    .map((v) => JSON.stringify(v));
}
