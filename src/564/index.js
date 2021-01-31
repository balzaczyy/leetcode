/**
 * @param {string} n
 * @return {string}
 */
const nearestPalindromic = function (n) {
  return n;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(nearestPalindromic)
    .map((v) => JSON.stringify(v));
}
