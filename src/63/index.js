/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function (obstacleGrid) {
  return 1;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(uniquePathsWithObstacles)
    .map((v) => JSON.stringify(v));
}
