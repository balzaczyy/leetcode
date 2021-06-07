/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function (cost) {
  return 0;
};

export default function run(input) {
  return input.map(JSON.parse).map(minCostClimbingStairs).map(String);
}
