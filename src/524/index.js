import { group } from "../utils.js";

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
const findLongestWord = function (s, d) {
  return s;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2).map(([s, d]) => findLongestWord(s, d));
}
