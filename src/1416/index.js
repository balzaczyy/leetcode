import { group } from "../utils.js";

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const numberOfArrays = function (s, k) {
  const mod = 1000000007;
  const ans = Array(s.length + 1);
  ans[s.length] = 1;
  let d = 1;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "0") {
      d *= 10;
      if (d > k) {
        return 0;
      }
      ans[i] = ans[i + 1];
    } else {
      d = Number(s[i]);
      if (d > k) {
        return 0;
      }
      ans[i] = 0;
      for (let j = 1; d <= k && i + j <= s.length; j++) {
        if (s[i + j] === "0") {
          d *= 10;
        } else {
          ans[i] = (ans[i] + ans[i + j]) % mod;
          if (i + j < s.length) {
            d = d * 10 + Number(s[i + j]);
          }
        }
      }
      // console.log(i, ans[i]);
      d = 1;
    }
  }
  return ans[0];
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([s, k]) => numberOfArrays(s, k))
    .map(String);
}
