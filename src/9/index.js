/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  return x >= 0;
};

export default function run(input) {
  return input.map(Number).map(isPalindrome).map(String);
}
