import { group } from "../utils.js";

/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
const spellchecker = function (wordlist, queries) {
  const sensitive = new Map();
  const insensitive = new Map();
  const fuzz = new Map();
  const toFuzzKey = (v) => v.toLowerCase().replace(/[aeiou]/gi, "-");
  wordlist.forEach((v) => {
    sensitive.set(v, v);
    if (!insensitive.has(v.toLowerCase())) {
      insensitive.set(v.toLowerCase(), v);
    }
    const fuzzKey = toFuzzKey(v);
    // console.log(v, fuzzKey);
    if (!fuzz.has(fuzzKey)) {
      fuzz.set(fuzzKey, v);
    }
  });
  // console.log(sensitive, insensitive, fuzz);
  return queries.map((v) => {
    if (sensitive.has(v)) {
      return sensitive.get(v);
    }
    if (insensitive.has(v.toLowerCase())) {
      return insensitive.get(v.toLowerCase());
    }
    const fuzzKey = toFuzzKey(v);
    if (fuzz.has(fuzzKey)) {
      const one = fuzz.get(fuzzKey);
      if (insensitive.has(one)) {
        return insensitive.get(one);
      }
      return one;
    }
    return "";
  });
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([wordlist, queries]) => spellchecker(wordlist, queries))
    .map((v) => JSON.stringify(v));
}
