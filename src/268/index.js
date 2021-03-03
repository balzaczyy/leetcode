/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  return 0;
};

export default function run(input) {
  return input.map(JSON.parse).map(missingNumber).map(String);
}
