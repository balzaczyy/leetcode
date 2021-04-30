import { group } from "../utils.js";

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  return [-1, -1];
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([nums, target]) => searchRange(nums, target))
    .map((v) => JSON.stringify(v));
}
