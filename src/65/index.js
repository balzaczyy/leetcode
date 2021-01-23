const re = /[+-]?(\d+\.\d+|\d+\.|\.\d+|\d+)([eE][+-]?\d+)?/;

/**
 * @param {string} s
 * @return {boolean}
 */
const isNumber = function (s) {
  return re.test(s);
};

export default function run(input) {
  return input.map(isNumber).map(String);
}
