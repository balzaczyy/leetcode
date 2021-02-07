import { group } from "../utils.js";

/**
 * @param {string} s
 * @param {string} c
 * @return {number[]}
 */
const shortestToChar = function (s, c) {
  const ans = Array(s.length);
  let last = -1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      last = i;
      ans[i] = 0;
    } else if (last >= 0) {
      ans[i] = i - last;
    }
  }
  last = s.length;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === c) {
      last = i;
      ans[i] = 0;
    } else if (last < s.length) {
      if (!ans[i] || ans[i] > last - i) {
        ans[i] = last - i;
      }
    }
  }
  return ans;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([s, c]) => shortestToChar(s, c))
    .map((v) => JSON.stringify(v));
}
