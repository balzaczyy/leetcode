/**
 * @param {number[]} nums
 * @return {number}
 */
const findUnsortedSubarray = function (nums) {
  return 0;
};

export default function run(input) {
  return input.map(JSON.parse).map(findUnsortedSubarray).map(String);
}
