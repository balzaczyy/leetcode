/**
 * @param {string} s
 * @return {boolean}
 */
const isNumber = function (s) {
  const re = /^[+-]?(\d+\.\d+|\d+\.|\.\d+|\d+)([eE][+-]?\d+)?$/;
  return re.test(s);
};

export default function run(input) {
  return input.map(JSON.parse).map(isNumber).map(String);
}
