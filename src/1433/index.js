import { group } from "../utils.js";

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkIfCanBreak = function (s1, s2) {
  function stringToSortedArray(s) {
    const ans = [];
    for (const ch of s) {
      ans.push(ch);
    }
    ans.sort((a, b) => a.localeCompare(b));
    return ans;
  }
  const a1 = stringToSortedArray(s1);
  const a2 = stringToSortedArray(s2);
  let count = 0;
  for (let i = 0; i < a1.length; i++) {
    const d = a1[i].localeCompare(a2[i]);
    if ((count > 0 && d < 0) || (count < 0 && d > 0)) {
      return false;
    }
    count += d;
  }
  return true;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([s1, s2]) => checkIfCanBreak(s1, s2))
    .map(String);
}
