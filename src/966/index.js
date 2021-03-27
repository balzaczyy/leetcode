import { group } from "../utils.js";

/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
const spellchecker = function (wordlist, queries) {
  return [];
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([wordlist, queries]) => spellchecker(wordlist, queries))
    .map((v) => JSON.stringify(v));
}
