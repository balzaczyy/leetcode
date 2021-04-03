/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (s) {
  return 0;
};

export default function run(input) {
  return input.map(JSON.parse).map(longestValidParentheses).map(String);
}
