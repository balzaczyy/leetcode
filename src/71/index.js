/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function (path) {
  return path;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(simplifyPath)
    .map((v) => JSON.stringify(v));
}
