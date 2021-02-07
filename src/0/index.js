/**
 * @param {string} line
 * @return {string}
 */
const assembleTrackers = function (line) {
  return line;
};

export default function run(input) {
  return input.map(assembleTrackers).filter(Boolean).join(",");
}
