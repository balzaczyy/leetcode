import { group } from "../utils.js";

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
const hasAllCodes = function (s, k) {
  const numCodecs = 1 << k;
  if (s.length < numCodecs - 1 + k) {
    return false;
  }

  const pool = new Set();
  let seed = 0;
  for (let i = 0; i < k; i++) {
    seed = (seed << 1) | Number(s[i]);
  }
  pool.add(seed);
  // console.log(s.substring(0, k), seed);

  const mask = (1 << k) - 1;
  for (let i = k; i < s.length; i++) {
    if (s.length - i + pool.size < numCodecs) {
      return false; // fast fail
    }
    if (s.length === numCodecs) {
      return true; // fast quit
    }

    seed = ((seed << 1) | Number(s[i])) & mask;
    pool.add(seed);
  }

  return pool.size === numCodecs;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([s, k]) => hasAllCodes(s, k))
    .map(String);
}
