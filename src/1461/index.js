import { group } from "../utils.js";

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
const hasAllCodes = function (s, k) {
  return true;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([s, k]) => hasAllCodes(s, k))
    .map(String);
}
