import { group } from "../utils.js";

/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
const wordSubsets = function (A, B) {
  return A;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([A, B]) => wordSubsets(A, B))
    .map((v) => JSON.stringify(v));
}
