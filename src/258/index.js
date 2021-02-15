/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function (num) {
  if (num === 0) {
    return 0;
  }
  const ans = num % 9;
  return ans === 0 ? 9 : ans;
};

export default function run(input) {
  return input.map(Number).map(addDigits).map(String);
}
