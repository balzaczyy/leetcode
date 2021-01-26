/**
 * @param {string} s
 * @return {number}
 */
const numSub = function (s) {
  return 0;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(numSub)
    .map((v) => JSON.stringify(v));
}
