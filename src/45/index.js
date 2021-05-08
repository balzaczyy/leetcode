/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function (nums) {
  return 0;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(jump)
    .map((v) => JSON.stringify(v));
}
