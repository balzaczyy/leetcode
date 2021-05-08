import { group } from "../utils.js";

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function (word1, word2) {
  const ans = Array(word1.length + 1);
  for (let i = 0; i <= word1.length; i++) {
    ans[i] = Array(word2.length + 1);
    for (let j = 0; j <= word2.length; j++) {
      if (i === 0 || j === 0) {
        ans[i][j] = 0;
      } else if (word1[i - 1] === word2[j - 1]) {
        ans[i][j] = 1 + ans[i - 1][j - 1];
      } else {
        ans[i][j] = Math.max(ans[i - 1][j], ans[i][j - 1]);
      }
    }
  }
  // console.log(ans);
  return word1.length + word2.length - ans[word1.length][word2.length] * 2;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([word1, word2]) => minDistance(word1, word2))
    .map(String);
}
