/**
 * @param {string} S
 * @return {string}
 */
const removeOuterParentheses = function (S) {
  return S;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(removeOuterParentheses)
    .map((v) => JSON.stringify(v));
}
