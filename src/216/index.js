import { group } from "../utils.js";

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = function (k, n) {
  return [];
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(combinationSum3)
    .map((v) => JSON.stringify(v));
}
