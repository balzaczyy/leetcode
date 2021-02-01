import { group } from "../utils.js";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const kLengthApart = function (nums, k) {
  if (k === 0) {
    return true;
  }

  let count = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (count < k) {
        return false;
      }
      count = 0;
    } else {
      count++;
    }
  }
  return true;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([nums, k]) => kLengthApart(nums, k))
    .map(String);
}
