/**
 * @param {number} n
 * @return {number}
 */
const concatenatedBinary = function (n) {
  const mod = 1000000007;
  const moveLeft = (n) => Math.pow(2, Math.floor(Math.log2(n)) + 1);
  let d = 1;
  for (let i = 2; i <= n; i++) {
    d = (d * moveLeft(i) + i) % mod;
    // console.log(i, d);
  }
  return d;
};

export default function run(input) {
  return input.map(JSON.parse).map(concatenatedBinary).map(String);
}
