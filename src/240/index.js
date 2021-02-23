import { group } from "../utils.js";

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  return true;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2).map(searchMatrix).map(String);
}
