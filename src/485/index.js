/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
  return nums.length;
};

export default function run(input) {
  return input.map(JSON.parse).map(findMaxConsecutiveOnes).map(String);
}
