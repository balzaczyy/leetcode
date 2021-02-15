import { group } from "../utils.js";

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = function (mat, k) {
  return [];
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([mat, k]) => kWeakestRows(mat, k))
    .map((v) => JSON.stringify(v));
}
