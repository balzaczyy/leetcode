import { group } from "../utils.js";

/**
 * @param {number} n
 * @param {number[][]} dependencies
 * @param {number} k
 * @return {number}
 */
const minNumberOfSemesters = function (n, dependencies, k) {
  const ins = [],
    outs = [];
  dependencies.forEach(([a, b]) => {
    if (!ins[b - 1]) {
      ins[b - 1] = new Set();
    }
    ins[b - 1].add(a - 1);
    if (!outs[a - 1]) {
      outs[a - 1] = new Set();
    }
    outs[a - 1].add(b - 1);
  });

  // calculate depth to detect critical path
  const depths = [];
  function searchDepth(x) {
    if (depths[x] !== undefined) {
      // already calculated
      return depths[x];
    }
    const d = outs[x]?.size || 0;
    if (d === 0) {
      // no direct children
      return 1;
    }
    let max = -1;
    outs[x].forEach((v) => {
      max = Math.max(max, searchDepth(v));
    });
    return max + 1;
  }
  for (let i = 0; i < n; i++) {
    if (depths[i] !== undefined) {
      continue;
    }
    depths[i] = searchDepth(i);
  }
  // console.log(depths);

  // console.log(ins);
  const q = Array.from(Array(n).keys());

  function compare(a, b) {
    const inLenA = ins[a]?.size || 0;
    const inLenB = ins[b]?.size || 0;
    if (inLenA > 0 && inLenB > 0) {
      return 0;
    }
    if (inLenA === 0 && inLenB === 0) {
      return depths[b] - depths[a];
    }
    return inLenA - inLenB;
  }

  let ans = 0;
  while (q.length > 0) {
    q.sort(compare);
    const pos = q.findIndex((v) => (ins[v]?.size || 0) > 0);
    const till = pos < 0 ? q.length : pos;
    const save = q.length;
    for (let i = 0; i < k && i < till && q.length > 0; i++) {
      const c = q.shift();
      if (outs[c]) {
        outs[c].forEach((v) => {
          ins[v].delete(c);
        });
      }
    }
    if (q.length === save) {
      throw new Error("impossible");
    }
    ans++;
    // console.log(ans, q);
  }
  return ans;
};

export default function run(input) {
  return group(input.map(JSON.parse), 3)
    .map(([n, dependencies, k]) => minNumberOfSemesters(n, dependencies, k))
    .map((v) => JSON.stringify(v));
}
