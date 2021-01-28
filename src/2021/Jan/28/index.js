import { group } from "../../../utils.js";

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getSmallestString = function (n, k) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const ans = Array(n).fill("a");
  k -= n;
  for (let i = n - 1; i >= 0; i--) {
    if (k >= 25) {
      ans[i] = "z";
      k -= 25;
    } else {
      ans[i] = alphabet[k];
      break;
    }
  }
  return ans.join("");
};

export default function run(input) {
  return group(input.map(JSON.parse), 2).map(([n, k]) =>
    getSmallestString(n, k)
  );
}
