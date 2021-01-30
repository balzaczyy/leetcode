import { group } from "../utils.js";

/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
const getMaxRepetitions = function (s1, n1, s2, n2) {
  return 0;
};

export default function run(input) {
  return group(input.map(JSON.parse), 4)
    .map(([s1, n1, s2, n2]) => getMaxRepetitions(s1, n1, s2, n2))
    .map(String);
}
