import { group } from "../utils.js";

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = function (nums, target) {
  return 0;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([nums, target]) => combinationSum4(nums, target))
    .map(String);
}
