import { group } from "../utils.js";

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  let start = 0;
  let last = [null, 0];
  for (let i = 0; i < nums.length; i++) {
    const d = nums[i];
    if (d > target) {
      // done
      break;
    }
    if (d !== last[0]) {
      start += last[1];
      last = [d, 1];
    } else {
      last[1]++;
    }
  }
  return last[0] === target ? [start, start + last[1] - 1] : [-1, -1];
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([nums, target]) => searchRange(nums, target))
    .map((v) => JSON.stringify(v));
}
