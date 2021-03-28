/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function (s) {
  const cache = new Set();
  const cacheKey = (from, to) => from + "-" + to;
  /**
   * @param {number} from
   * @param {number} to
   * @returns {boolean}
   */
  function isPalindromic(from, to) {
    if (from > to) {
      throw new Error("invalid");
    }
    if (s[from] !== s[to]) {
      return false;
    }
    if (to - from <= 1) {
      return true;
    }
    if (cache.has(cacheKey(from, to))) {
      return true;
    }
    const ok = isPalindromic(from + 1, to - 1);
    if (ok) {
      cache.add(cacheKey(from, to));
    }
    return ok;
  }
  const ans = Array(s.length);
  for (let i = 0; i < s.length; i++) {
    let count = 0;
    for (let j = 0; j <= i; j++) {
      if (isPalindromic(j, i)) {
        count++;
      }
    }
    ans[i] = count;
  }
  return ans.reduce((acc, cur) => acc + cur);
};

export default function run(input) {
  return input.map(JSON.parse).map(countSubstrings).map(String);
}
