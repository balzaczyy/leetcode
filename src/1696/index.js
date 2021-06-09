import { group } from "../utils.js";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxResult = function (nums, k) {
  return 0;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([nums, k]) => maxResult(nums, k))
    .map(maxResult)
    .map(String);
}
