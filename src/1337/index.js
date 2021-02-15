import { group } from "../utils.js";

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = function (mat, k) {
  const power = mat.map((v, i) => [v.reduce((acc, cur) => acc + cur), i]);
  power.sort((a, b) => a[0] - b[0]);
  return power.map((v) => v[1]).slice(0, k);
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([mat, k]) => kWeakestRows(mat, k))
    .map((v) => JSON.stringify(v));
}
