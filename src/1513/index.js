/**
 * @param {string} s
 * @return {number}
 */
const numSub = function (s) {
  const mod = 1000000007;
  function count(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
      ans = (ans + i) % mod;
    }
    return ans;
  }

  let from = 0,
    ans = 0;
  do {
    from = s.indexOf("1", from);
    if (from < 0) {
      break;
    }
    let to = s.indexOf("0", from + 1);
    if (to < 0) {
      to = s.length;
    }
    ans = (ans + count(to - from)) % mod;
    from = to;
  } while (from < s.length);
  return ans;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(numSub)
    .map((v) => JSON.stringify(v));
}
