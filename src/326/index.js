/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function (n) {
  return false;
};

export default function run(input) {
  return input.map(JSON.parse).map(isPowerOfThree).map(String);
}
