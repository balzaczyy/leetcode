import { group } from "../utils.js";

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
const shortestToChar = function (s, c) {
  return [];
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([s, c]) => shortestToChar(s, c))
    .map((v) => JSON.stringify(v));
}
