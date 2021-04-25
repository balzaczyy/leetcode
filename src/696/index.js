/**
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = function (s) {
  let pos = 0,
    last = 0,
    ans = 0;
  while (pos < s.length) {
    let count = 1;
    while (pos + count < s.length && s[pos + count] === s[pos]) {
      count++;
    }
    ans += Math.min(last, count);
    last = count;
    pos += count;
  }
  return ans;
};

export default function run(input) {
  return input.map(JSON.parse).map(countBinarySubstrings).map(String);
}
