/**
 * @param {string[]} grid
 * @return {number}
 */
const regionsBySlashes = function (grid) {
  return 0;
};

export default function run(input) {
  return input.map(JSON.parse).map(regionsBySlashes).map(String);
}
