import { group } from "../utils.js";

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
const constructArray = function (n, k) {
  return [];
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([n, k]) => constructArray(n, k))
    .map((v) => JSON.stringify(v));
}
