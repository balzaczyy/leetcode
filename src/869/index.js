/**
 * @param {number} n
 * @return {boolean}
 */
const reorderedPowerOf2 = function (n) {
  return false;
};

export default function run(input) {
  return input.map(JSON.parse).map(reorderedPowerOf2).map(String);
}
