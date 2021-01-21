import { group } from "../utils.js";

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let ans = 0;
  for (let i = 0, j = 0; i < g.length && j < s.length; i++) {
    while (j < s.length && s[j] < g[i]) {
      j++;
    }
    if (j === s.length) {
      // no more cookies
      break;
    }
    // give cookie s[j] to g[i] and move on
    j++;
    ans++;
  }
  return ans;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([g, s]) => findContentChildren(g, s))
    .map((v) => JSON.stringify(v));
}
