import { group } from "../utils.js";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numSubarrayProductLessThanK = function (nums, k) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = 0,
      n = 1;
    for (let j = i; j < nums.length && n < k; j++) {
      n *= nums[j];
      if (n < k) {
        // console.log(n);
        count++;
      }
    }
    ans += count;
  }
  return ans;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([nums, k]) => numSubarrayProductLessThanK(nums, k))
    .map(String);
}
