import { group } from "../utils.js";

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
const findRadius = function (houses, heaters) {
  let ans = 0;
  for (let i = 0; i < houses.length; i++) {
    let min = Math.abs(houses[i] - heaters[0]);
    for (let j = 1; j < heaters.length; j++) {
      min = Math.min(min, Math.abs(houses[i] - heaters[j]));
    }
    ans = Math.max(ans, min);
  }
  return ans;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([houses, heaters]) => findRadius(houses, heaters))
    .map(String);
}
