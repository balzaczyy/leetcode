/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function (num) {
  return 0;
};

export default function run(input) {
  return input.map(Number).map(addDigits).map(String);
}
