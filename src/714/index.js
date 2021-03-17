import { group } from "../utils.js";

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = function (prices, fee) {
  return 0;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([prices, fee]) => maxProfit(prices, fee))
    .map(String);
}
