/**
 * @param {string} s
 * @return {string[]}
 */
const ambiguousCoordinates = function (s) {
  return [];
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(ambiguousCoordinates)
    .map((v) => JSON.stringify(v));
}
