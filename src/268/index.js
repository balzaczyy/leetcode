/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  const n = nums.length;
  let sum = (n * (n + 1)) / 2;
  return nums.reduce((acc, cur) => acc - cur, sum);
};

export default function run(input) {
  return input.map(JSON.parse).map(missingNumber).map(String);
}
