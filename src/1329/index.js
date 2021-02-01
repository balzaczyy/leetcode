/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const diagonalSort = function (mat) {
  function matrixToDiagonal(m) {
    const ans = [];
    const offset = m.length - 1;
    for (let i = 0; i < m.length; i++) {
      for (let j = 0; j < m[i].length; j++) {
        const id = j - i + offset;
        let q = ans[id];
        if (!q) {
          q = ans[id] = [];
        }
        q.push(m[i][j]);
      }
    }
    return ans;
  }

  function diagonalToMatrix(d, rows, cols) {
    const ans = [];
    for (let i = 0; i < rows; i++) {
      const q = [];
      for (let j = 0; j < cols; j++) {
        const diff = i + j < rows ? 0 : i + j - rows + 1;
        q.push(d[i + j][j - diff]);
      }
      ans.push(q);
    }
    ans.reverse();
    return ans;
  }

  const d = matrixToDiagonal(mat);
  // console.log(d);
  for (let i = 0; i < d.length; i++) {
    d[i].sort((a, b) => a - b);
  }
  const m = diagonalToMatrix(d, mat.length, mat[0].length);
  // console.log(m);
  return m;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(diagonalSort)
    .map((v) => JSON.stringify(v));
}
