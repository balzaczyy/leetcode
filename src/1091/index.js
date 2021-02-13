/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = function (grid) {
  return 1;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(shortestPathBinaryMatrix)
    .map((v) => JSON.stringify(v));
}
