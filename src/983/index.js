import { group } from "../utils.js";

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
const mincostTickets = function (days, costs) {
  const cost = [];
  for (let i = 0, j = 0; i < 365 && j < days.length; i++) {
    if (days[j] === i + 1) {
      j++;
      cost[i] = (cost[i - 1] || 0) + costs[0];
      cost[i] = Math.min(cost[i], (cost[i - 7] || 0) + costs[1]);
      cost[i] = Math.min(cost[i], (cost[i - 30] || 0) + costs[2]);
    } else {
      cost[i] = cost[i - 1];
    }
  }
  return cost[cost.length - 1];
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([days, costs]) => mincostTickets(days, costs))
    .map(String);
}
