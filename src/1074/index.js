import { group } from "../utils.js";

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
const numSubmatrixSumTarget = function (matrix, target) {
  const rowLen = matrix.length;
  const colLen = matrix[0].length;
  const sum = Array(rowLen);
  for (let i = 0; i < rowLen; i++) {
    sum[i] = Array(colLen);
    for (let j = 0; j < colLen; j++) {
      sum[i][j] =
        (i === 0 ? 0 : sum[i - 1][j]) +
        (j === 0 ? 0 : sum[i][j - 1]) -
        (i === 0 || j === 0 ? 0 : sum[i - 1][j - 1]) +
        matrix[i][j];
    }
  }
  // console.log(sum);
  const subSum = (i, j, k, l) =>
    sum[k][l] -
    (i === 0 ? 0 : sum[i - 1][l]) -
    (j === 0 ? 0 : sum[k][j - 1]) +
    (i === 0 || j === 0 ? 0 : sum[i - 1][j - 1]);
  let ans = 0;
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      for (let k = i; k < rowLen; k++) {
        for (let l = j; l < colLen; l++) {
          if (subSum(i, j, k, l) === target) {
            ans++;
          }
        }
      }
    }
  }
  return ans;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([matrix, target]) => numSubmatrixSumTarget(matrix, target))
    .map(String);
}
