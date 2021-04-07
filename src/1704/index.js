/**
 * @param {string} s
 * @return {boolean}
 */
const halvesAreAlike = function (s) {
  return true;
};

export default function run(input) {
  return input.map(JSON.parse).map(halvesAreAlike).map(String);
}
