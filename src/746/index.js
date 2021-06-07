/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function (cost) {
  const len = cost.length;
  const ans = Array(len + 2);
  ans[len] = 0;
  ans[len + 1] = 0;
  for (let i = len - 1; i >= 0; i--) {
    ans[i] = cost[i] + Math.min(ans[i + 1], ans[i + 2]);
  }
  return Math.min(ans[0], ans[1]);
};

export default function run(input) {
  return input.map(JSON.parse).map(minCostClimbingStairs).map(String);
}
