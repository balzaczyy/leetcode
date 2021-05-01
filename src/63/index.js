/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function (obstacleGrid) {
  const rowLen = obstacleGrid.length;
  const colLen = obstacleGrid[0].length;
  const score = (y, x) => {
    if (y < 0 || x < 0) {
      return 0;
    }
    return obstacleGrid[y][x];
  };
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (i === 0 && j === 0) {
        if (obstacleGrid[i][j] === 1) {
          return 0;
        }
        obstacleGrid[i][j] = 1; // start
      } else if (obstacleGrid[i][j] === 1) {
        // stone
        obstacleGrid[i][j] = 0;
      } else {
        obstacleGrid[i][j] = score(i - 1, j) + score(i, j - 1);
      }
    }
  }
  // console.log(obstacleGrid)
  return obstacleGrid[rowLen - 1][colLen - 1];
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(uniquePathsWithObstacles)
    .map((v) => JSON.stringify(v));
}
