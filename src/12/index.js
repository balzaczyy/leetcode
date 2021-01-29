/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
  return num;
};

export default function run(input) {
  return input.map(Number).map(intToRoman).map(String);
}
