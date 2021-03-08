/**
 * @param {string} s
 * @return {number}
 */
const removePalindromeSub = function (s) {
  if (s === "") {
    return 0;
  }
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return 2;
    }
  }
  return 1;
};

export default function run(input) {
  return input.map(JSON.parse).map(removePalindromeSub).map(String);
}
