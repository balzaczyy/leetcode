import { group } from "../utils.js";

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = function (words, order) {
  if (words.length <= 1) {
    return true;
  }
  return false;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2).map(isAlienSorted).map(String);
}
