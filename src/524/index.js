import { group } from "../utils.js";

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
const findLongestWord = function (s, d) {
  const candidates = d.filter((v) => v.length <= s.length);
  candidates.sort((a, b) => {
    if (a.length !== b.length) {
      return b.length - a.length;
    }
    return a.localeCompare(b);
  });

  return (
    candidates.find((v) => {
      let i = 0,
        j = 0;
      while (i < s.length && j < v.length) {
        if (s[i] === v[j]) {
          j++;
        }
        i++;
      }
      return j === v.length;
    }) || ""
  );
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([s, d]) => findLongestWord(s, d))
    .map((v) => JSON.stringify(v));
}
