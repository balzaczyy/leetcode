/**
 * @param {string[]} words
 * @return {number}
 */
const minimumLengthEncoding = function (words) {
  return 0;
};

export default function run(input) {
  return input.map(JSON.parse).map(minimumLengthEncoding).map(String);
}
