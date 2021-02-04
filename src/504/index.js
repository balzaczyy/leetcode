/**
 * @param {number} num
 * @return {string}
 */
const convertToBase7 = function (num) {
  return "0";
};

export default function run(input) {
  return input.map(JSON.parse).map(convertToBase7);
}
