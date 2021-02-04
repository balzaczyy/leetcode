import { group } from "../utils.js";

/**
 * @param {number} n
 * @param {number[][]} dependencies
 * @param {number} k
 * @return {number}
 */
const minNumberOfSemesters = function (n, dependencies, k) {
  return 0;
};

export default function run(input) {
  return group(input.map(JSON.parse), 3)
    .map(([n, dependencies, k]) => minNumberOfSemesters(n, dependencies, k))
    .map((v) => JSON.stringify(v));
}
