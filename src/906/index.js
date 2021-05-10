import { group } from "../utils.js";

/**
 * @param {string} left
 * @param {string} right
 * @return {number}
 */
const superPalindromesInRange = function (left, right) {
  return 0;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([left, right]) => superPalindromesInRange(left, right))
    .map((v) => JSON.stringify(v));
}
