import { group } from "../utils.js";

/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const findMaxForm = function (strs, m, n) {
  /**
   * @param {string} s
   * @returns {number[]}
   */
  function countZeroOne(s) {
    let a = 0,
      b = 0;
    for (const ch of s) {
      if (ch === "0") a++;
      if (ch === "1") b++;
    }
    return [a, b];
  }

  const ans = Array(strs.length);
  for (let i = 0; i < strs.length; i++) {
    ans[i] = Array(m);
    const [numZeroes, numOnes] = countZeroOne(strs[i]);
    for (let j = 0; j <= m; j++) {
      ans[i][j] = Array(n).fill(0);
      for (let k = 0; k <= n; k++) {
        if (i === 0) {
          if (j < numZeroes || k < numOnes) {
            ans[i][j][k] = 0;
          } else {
            ans[i][j][k] = 1;
          }
        } else if (j < numZeroes || k < numOnes) {
          ans[i][j][k] = ans[i - 1][j][k];
        } else {
          ans[i][j][k] = Math.max(
            ans[i - 1][j][k],
            ans[i - 1][j - numZeroes][k - numOnes] + 1
          );
        }
      }
    }
  }
  return ans[strs.length - 1][m][n];
};

export default function run(input) {
  return group(input.map(JSON.parse), 3)
    .map(([strs, m, n]) => findMaxForm(strs, m, n))
    .map(String);
}
