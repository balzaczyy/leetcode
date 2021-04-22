/**
 * @param {number[][]} wall
 * @return {number}
 */
const leastBricks = function (wall) {
  const height = wall.length;
  const plan = Array(height);
  for (let i = 0; i < height; i++) {
    plan[i] = [i, wall[i].shift()];
  }
  let ans = 0;
  let count = wall.reduce((acc, cur) => acc + cur.length, 0);
  while (count > 0) {
    plan.sort((a, b) => a[1] - b[1]);
    const score = plan.findIndex((v) => v[1] !== plan[0][1]);
    if (score > ans) {
      ans = score;
      // console.log(score, plan);
    }
    for (let i = 0; i < score; i++) {
      plan[i][1] += wall[plan[i][0]].shift();
      count--;
    }
  }
  return height - ans;
};

export default function run(input) {
  return input.map(JSON.parse).map(leastBricks).map(String);
}
