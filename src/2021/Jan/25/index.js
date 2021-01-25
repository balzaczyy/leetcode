import { group } from "../../../utils.js";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const kLengthApart = function (nums, k) {
  return true;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([nums, k]) => kLengthApart(nums, k))
    .map(String);
}
