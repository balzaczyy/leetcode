import { group } from "../utils.js";

/**
 * @param {number[][]} matrix
 */
const NumMatrix = function (matrix) {
  const rowLen = matrix.length;
  const colLen = matrix[0].length;
  const s = Array(rowLen);
  for (let i = 0; i < rowLen; i++) {
    s[i] = Array(colLen);
    for (let j = 0; j < colLen; j++) {
      if (i === 0) {
        if (j === 0) {
          s[i][j] = matrix[i][j];
        } else {
          s[i][j] = s[i][j - 1] + matrix[i][j];
        }
      } else {
        if (j === 0) {
          s[i][j] = s[i - 1][j] + matrix[i][j];
        } else {
          s[i][j] = s[i - 1][j] + s[i][j - 1] - s[i - 1][j - 1] + matrix[i][j];
        }
      }
    }
  }
  this.sum = s;
  console.log(s);
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  const s = this.sum;
  if (row1 === 0) {
    if (col1 === 0) {
      return s[row2][col2];
    } else {
      return s[row2][col2] - s[row1][col1 - 1];
    }
  } else {
    if (col1 === 0) {
      return s[row2][col2] - s[row1 - 1][col1];
    } else {
      console.log(
        s[row2][col2],
        s[row2][col1 - 1],
        s[row1 - 1][col2],
        s[row1 - 1][col1 - 1]
      );
      return (
        s[row2][col2] -
        s[row2][col1 - 1] -
        s[row1 - 1][col2] +
        s[row1 - 1][col1 - 1]
      );
    }
  }
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([commands, params]) => {
      const ans = [];
      let obj = {};
      for (let i = 0; i < commands.length; i++) {
        const param = params[i];
        switch (commands[i]) {
          case "NumMatrix":
            obj = new NumMatrix(...param);
            ans.push(null);
            break;
          case "sumRegion":
            ans.push(obj.sumRegion(...param));
            break;
        }
      }
      return ans;
    })
    .map((v) => JSON.stringify(v));
}
