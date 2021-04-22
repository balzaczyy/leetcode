/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function (triangle) {
  let cur = [triangle[0][0]];
  for (let i = 1; i < triangle.length; i++) {
    const next = Array(i + 1);
    next[0] = triangle[i][0] + cur[0];
    for (let j = 1; j < i; j++) {
      next[j] = triangle[i][j] + Math.min(cur[j - 1], cur[j]);
    }
    next[i] = triangle[i][i] + cur[i - 1];
    cur = next;
  }
  let ans = cur[0];
  for (let i = 1; i < cur.length; i++) {
    if (cur[i] < ans) {
      ans = cur[i];
    }
  }
  return ans;
};

export default function run(input) {
  return input.map(JSON.parse).map(minimumTotal).map(String);
}
