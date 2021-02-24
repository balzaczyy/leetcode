/**
 * @param {string} S
 * @return {number}
 */
const scoreOfParentheses = function (S) {
  return 1;
};

export default function run(input) {
  return input.map(JSON.parse).map(scoreOfParentheses).map(String);
}
