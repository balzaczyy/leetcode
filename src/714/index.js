import { group } from "../utils.js";

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = function (prices, fee) {
  const days = prices.length;
  const profits = Array(days);
  profits[0] = [0, 0];
  for (let i = 1; i < days; i++) {
    let max = profits[i - 1][0];
    for (let j = i - 1; j >= 0; j--) {
      const limit = prices[i] - fee;
      if (profits[j][1] + limit < profits[i - 1][0]) {
        break;
      }
      const p = prices[i] - prices[j] - fee;
      if (p > 0) {
        max = Math.max(max, profits[j][1] + p); // transaction i->j
      }
    }
    profits[i] = [max, Math.max(profits[i - 1][0], profits[i - 1][1])];
  }
  return profits[days - 1][0];
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([prices, fee]) => maxProfit(prices, fee))
    .map(String);
}
