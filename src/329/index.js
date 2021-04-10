/**
 * @param {number[][]} matrix
 * @return {number}
 */
const longestIncreasingPath = function (matrix) {
  return 0;
};

export default function run(input) {
  return input.map(JSON.parse).map(longestIncreasingPath).map(String);
}
