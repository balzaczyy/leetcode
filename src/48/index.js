/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map((v) => {
      rotate(v);
      return v;
    })
    .map((v) => JSON.stringify(v));
}
