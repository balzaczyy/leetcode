/**
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPossibility = function (nums) {
  return true;
};

export default function run(input) {
  return input.map(JSON.parse).map(checkPossibility).map(String);
}
