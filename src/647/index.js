/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function (s) {
  return 0;
};

export default function run(input) {
  return input.map(JSON.parse).map(countSubstrings).map(String);
}
