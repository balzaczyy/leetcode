/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const MIN = -2147483648;
  if (x < 0) {
    const ans = -reverse(-x);
    return ans < MIN ? 0 : ans;
  }

  const MAX = 2147483647;
  let n = 0;
  while (x > 0) {
    const d = x % 10;
    n = n * 10 + d;
    if (n > MAX) {
      return 0;
    }
    x = Math.floor(x / 10);
  }
  return n;
};

export default function run(input) {
  return input.map(Number).map(reverse).map(String);
}
