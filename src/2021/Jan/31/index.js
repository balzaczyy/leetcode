/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function (nums) {};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map((nums) => {
      nextPermutation(nums);
      return nums;
    })
    .map((v) => JSON.stringify(v));
}
