import { group } from "../utils.js";

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = function (nums, target) {
  nums.sort((a, b) => a - b);
  const f = Array(target + 1);
  f[0] = 1;
  for (let i = 1; i <= target; i++) {
    f[i] = 0;
    for (let j = 0; j < nums.length && nums[j] <= i; j++) {
      f[i] += f[i - nums[j]];
    }
  }
  return f[target];
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([nums, target]) => combinationSum4(nums, target))
    .map(String);
}
