/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
  return nums;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(runningSum)
    .map((v) => JSON.stringify(v));
}
