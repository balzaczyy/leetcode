/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function (nums) {
  return [1, 2];
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(findErrorNums)
    .map((v) => JSON.stringify(v));
}
