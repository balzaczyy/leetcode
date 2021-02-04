import { group } from "../utils.js";

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  return [];
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(majorityElement)
    .map((v) => JSON.stringify(v));
}
