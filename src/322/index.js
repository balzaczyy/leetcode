import { group } from "../utils.js";

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
  return -1;
};

export default function run(input) {
  return group(
    input.map((v) => Number(v)),
    2
  )
    .map(([coins, amount]) => coinChange(coins, amount))
    .map(String);
}
