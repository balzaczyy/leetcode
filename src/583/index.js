import { group } from "../utils.js";

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function (word1, word2) {
  if (word1.localeCompare(word2) === 0) {
    return 0;
  }
  const b1 = new Map(),
    b2 = new Map();
  b1.set(word1, 0);
  b1.set("", word1.length);
  b2.set(word2, 0);
  b2.set("", word2.length);
  const q1 = [word1],
    q2 = [word2];

  /**
   * @param {[]} q
   * @param {number} target
   * @param {Map} bucket1
   * @param {Map} bucket2
   * @returns {[boolean, number]}
   */
  function extend(q, target, bucket1, bucket2) {
    while (q[0].length > target) {
      const w = q.shift();
      const score = bucket1.get(w);
      for (let i = 0; i < w.length; i++) {
        const ws = w
          .split("")
          .filter((v, index) => index !== i)
          .join("");
        if (bucket2.has(ws)) {
          return [true, score + 1 + bucket2.get(ws)];
        }
        if (!bucket1.has(ws)) {
          bucket1.set(ws, score + 1);
          q.push(ws);
        }
      }
    }
    return [false];
  }

  let found = false,
    res;
  for (
    let target = Math.min(word1.length, word2.length);
    !found && target > 0;
    target--
  ) {
    if (q1.length === 0 || q2.length === 0) {
      throw new Error("impossible");
    }
    [found, res] = extend(q1, target, b1, b2);
    if (!found) {
      [found, res] = extend(q2, target, b2, b1);
    }
  }
  return res || word1.length + word2.length;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([word1, word2]) => minDistance(word1, word2))
    .map(String);
}
