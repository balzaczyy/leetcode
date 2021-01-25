/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function (grid) {
  return 0;
};

export default function run(input) {
  return input.map(JSON.parse).map(minCost).map(String);
}
