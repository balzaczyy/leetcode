/**
 * @param {number[]} target
 * @return {boolean}
 */
const isPossible = function (target) {
  return false;
};

export default function run(input) {
  return input.map(JSON.parse).map(isPossible).map(String);
}
