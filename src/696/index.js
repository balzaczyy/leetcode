/**
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = function (s) {
  return 0;
};

export default function run(input) {
  return input.map(JSON.parse).map(countBinarySubstrings).map(String);
}
