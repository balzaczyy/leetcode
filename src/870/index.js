import { group } from "../utils.js";

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const advantageCount = function (A, B) {
  return A;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([A, B]) => advantageCount(A, B))
    .map((v) => JSON.stringify(v));
}
