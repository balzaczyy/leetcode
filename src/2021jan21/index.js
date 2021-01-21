import { group } from "../utils.js";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const mostCompetitive = function (nums, k) {
  function search(from, to) {
    let min = nums[from],
      pos = from;
    for (let i = from + 1; i < to; i++) {
      if (nums[i] < min) {
        min = nums[i];
        pos = i;
      }
    }
    return { min, pos };
  }

  const ans = [];
  let next = 0;
  for (let i = 0; i < k; i++) {
    const { min, pos } = search(next, nums.length - k + i + 1);
    ans.push(min);
    next = pos + 1;
  }
  return ans;
};

export default function run(input) {
  return group(
    input.map((v, i) => ((i & 1) === 0 ? JSON.parse(v) : Number(v))),
    2
  )
    .map(([nums, k]) => mostCompetitive(nums, k))
    .map((v) => JSON.stringify(v));
}
