/**
 * @param {string} s
 * @return {number}
 */
const removePalindromeSub = function (s) {
  return 0;
};

export default function run(input) {
  return input.map(JSON.parse).map(removePalindromeSub).map(String);
}
