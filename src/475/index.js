import { group } from "../utils.js";

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
const findRadius = function (houses, heaters) {
  return 0;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([houses, heaters]) => findRadius(houses, heaters))
    .map(String);
}
