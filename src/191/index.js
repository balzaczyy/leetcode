/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
  let ans = 0;
  while (n > 0) {
    if (n % 2 === 1) {
      ans++;
    }
    n = Math.floor(n / 2);
  }
  return ans;
};

export function binaryStringToNumber(s) {
  let n = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "1") {
      n = (n << 1) + 1;
    }
  }
  return n;
}

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(binaryStringToNumber)
    .map(hammingWeight)
    .map(String);
}
