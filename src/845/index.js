/**
 * @param {number[]} arr
 * @return {number}
 */
const longestMountain = function (arr) {
  return 0;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(longestMountain)
    .map((v) => JSON.stringify(v));
}
