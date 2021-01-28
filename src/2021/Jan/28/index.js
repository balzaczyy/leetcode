import { group } from "../../../utils.js";

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getSmallestString = function (n, k) {
  return "";
};

export default function run(input) {
  return group(input.map(JSON.parse), 2).map((n, k) => getSmallestString(n, k));
}
