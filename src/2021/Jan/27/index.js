/**
 * @param {number} n
 * @return {number}
 */
const concatenatedBinary = function (n) {
  return n;
};

export default function run(input) {
  return input.map(JSON.parse).map(concatenatedBinary).map(String);
}
