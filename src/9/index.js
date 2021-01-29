/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let d = 0;
  for (let i = x; i > 0; i = Math.floor(i / 10)) {
    d = d * 10 + (i % 10);
  }
  return d === x;
};

export default function run(input) {
  return input.map(Number).map(isPalindrome).map(String);
}
