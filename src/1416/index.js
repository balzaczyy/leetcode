import { group } from "../utils.js";

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const numberOfArrays = function (s, k) {
  return 0;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2).map(numberOfArrays).map(String);
}
