/**
 * @param {string} equation
 * @return {string}
 */
const solveEquation = function (equation) {
  return "No solution";
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(solveEquation)
    .map((v) => JSON.stringify(v));
}
