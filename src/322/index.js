import { group } from "../utils.js";

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
  const ans = Array(amount + 1);
  ans[0] = 0;
  for (let i = 1; i <= amount; i++) {
    let min = -1;
    for (let j = 0; j < coins.length; j++) {
      const last = i - coins[j];
      if (last === 0 || ans[last] > 0) {
        if (min < 0) {
          min = ans[last] + 1;
        } else {
          min = Math.min(min, ans[last] + 1);
        }
      }
    }
    ans[i] = min;
  }
  return ans[amount];
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([coins, amount]) => coinChange(coins, amount))
    .map(String);
}
