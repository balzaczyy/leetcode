import { group } from "../utils.js";

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
const maxScore = function (cardPoints, k) {
  const n = cardPoints.length;
  const sum = Array(n);
  let s = 0;
  for (let i = 0; i < n; i++) {
    s += cardPoints[i];
    sum[i] = s;
  }
  // console.log(sum);

  if (n === k) {
    return sum[n - 1];
  }

  let ans = 0;
  for (let i = n - k; i <= n; i++) {
    const t = (i + k) % n;
    let d = 0;
    if (t > 0) {
      d = sum[t - 1];
    }
    if (i < n) {
      d += sum[n - 1] - sum[i - 1];
    }
    ans = Math.max(ans, d);
  }
  return ans;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([cardPoints, k]) => maxScore(cardPoints, k))
    .map(String);
}
