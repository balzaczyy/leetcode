/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isPossible = function (nums) {
  return true;
};

export default function run(input) {
  return input.map(JSON.parse).map(isPossible).map(String);
}
