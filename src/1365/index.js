/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function (nums) {
  return nums;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(smallerNumbersThanCurrent)
    .map((v) => JSON.stringify(v));
}
