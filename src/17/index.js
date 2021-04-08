/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  return [];
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(letterCombinations)
    .map((v) => JSON.stringify(v));
}
