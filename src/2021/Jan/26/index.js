/**
 * @param {number[][]} heights
 * @return {number}
 */
const minimumEffortPath = function (heights) {
  return 0;
};

export default function run(input) {
  return input.map(JSON.parse).map(minimumEffortPath).map(String);
}
