/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = function (heights) {
  const colLen = heights[0].length;
  const rowLen = heights.length;
  const isValid = (v, limit) => v >= 0 && v < limit;
  const id = (row, col) => row * colLen + col;
  const offsets = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  function traceback(seeds) {
    const visited = Array(colLen * rowLen).fill(false);
    seeds.forEach(([row, col]) => {
      visited[id(row, col)] = true;
    });
    while (seeds.length > 0) {
      const [row, col] = seeds.shift();
      for (const dir of offsets) {
        const rowNext = row + dir[0];
        const colNext = col + dir[1];
        if (!isValid(rowNext, rowLen) || !isValid(colNext, colLen)) {
          continue;
        }
        if (heights[rowNext][colNext] < heights[row][col]) {
          continue;
        }
        if (visited[id(rowNext, colNext)]) {
          continue;
        }
        seeds.push([rowNext, colNext]);
        visited[id(rowNext, colNext)] = true;
      }
    }
    // console.log('result:');
    // visited.reduce((acc, cur) => {
    //   acc += (cur ? '1' : '0');
    //   if (acc.length === colLen) {
    //     console.log(acc);
    //     acc = '';
    //   }
    //   return acc;
    // }, '');
    return visited;
  }

  const seeds = [];
  // start from Pacific
  for (let i = 1; i < colLen; i++) {
    seeds.push([0, i]);
  }
  for (let i = 0; i < rowLen; i++) {
    seeds.push([i, 0]);
  }
  const fromP = traceback(seeds);

  // start from Atlantic
  for (let i = 0; i < colLen - 1; i++) {
    seeds.push([rowLen - 1, i]);
  }
  for (let i = 0; i < rowLen; i++) {
    seeds.push([i, colLen - 1]);
  }
  const fromA = traceback(seeds);

  // scan result
  const ans = [];
  for (let i = 0; i < fromP.length; i++) {
    if (fromP[i] && fromA[i]) {
      const row = Math.floor(i / colLen);
      const col = i % colLen;
      ans.push([row, col]);
    }
  }
  return ans;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(pacificAtlantic)
    .map((v) => JSON.stringify(v));
}
