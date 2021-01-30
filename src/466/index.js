import { group } from "../utils.js";

/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
const getMaxRepetitions = function (s1, n1, s2, n2) {
  const len1 = s1.length * n1;
  let j = 0;
  for (let i = 0; i < len1; i++) {
    // const g1 = Math.floor(i/s1.length);
    const p1 = i % s1.length;
    const p2 = j % s2.length;
    if (s2[p2] === s1[p1]) {
      j++;
    }
  }
  return Math.floor(j / s2.length / n2);
};

export default function run(input) {
  return group(input.map(JSON.parse), 4)
    .map(([s1, n1, s2, n2]) => getMaxRepetitions(s1, n1, s2, n2))
    .map(String);
}
