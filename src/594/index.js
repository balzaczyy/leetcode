/**
 * @param {number[]} nums
 * @return {number}
 */
const findLHS = function (nums) {
  return 0;
};

export default function run(input) {
  return input.map(JSON.parse).map(findLHS).map(String);
}
