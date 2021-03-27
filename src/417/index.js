/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = function (heights) {
  return [];
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(pacificAtlantic)
    .map((v) => JSON.stringify(v));
}
