/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function (n) {
  if (n < 1) {
    return false;
  }
  const minDiff = 0.0000000001;
  const ans = Math.log(n) / Math.log(3);
  // console.log(ans);
  return Math.abs(ans - Math.floor(ans)) < minDiff;
};

export default function run(input) {
  return input.map(JSON.parse).map(isPowerOfThree).map(String);
}
