import { group } from "../utils.js";

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function (matrix, target) {
  return 0;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([matrix, target]) => numSubmatrixSumTarget(matrix, target))
    .map(String);
}
