import { group } from "../utils.js";

/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
const wordSubsets = function (A, B) {
  const sig = B.reduce((acc, cur) => {
    const f = new Map();
    for (const ch of cur) {
      f.set(ch, 1 + (f.get(ch) || 0));
    }
    for (const e of f) {
      const [ch, count] = e;
      acc.set(ch, Math.max(count, acc.get(ch) || 0));
    }
    return acc;
  }, new Map());
  // console.log(sig);
  return A.filter((a) => {
    const f = new Map();
    for (const ch of a) {
      f.set(ch, 1 + (f.get(ch) || 0));
    }
    for (const e of sig) {
      const [ch, count] = e;
      if (!f.has(ch) || f.get(ch) < count) {
        return false;
      }
    }
    return true;
  });
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([A, B]) => wordSubsets(A, B))
    .map((v) => JSON.stringify(v));
}
