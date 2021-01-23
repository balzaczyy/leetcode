import { group } from "../utils.js";

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkIfCanBreak = function (s1, s2) {
  return true;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([s1, s2]) => checkIfCanBreak(s1, s2))
    .map(String);
}
