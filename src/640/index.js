/**
 * @param {string} equation
 * @return {string}
 */
const solveEquation = function (equation) {
  let numX = 0,
    value = 0;
  equation += "$";
  let stack = "",
    eqOffset = 1;
  for (const ch of equation) {
    if ("+-=$".includes(ch)) {
      // stop sign
      const sign = stack.startsWith("-") ? -1 : 1;
      if (sign < 0) {
        stack = stack.substring(1);
      }
      if (stack.startsWith("+")) {
        stack = stack.substring(1);
      }
      if (stack.endsWith("x")) {
        numX +=
          eqOffset * sign * Number(stack.substring(0, stack.length - 1) || "1");
      } else {
        value -= eqOffset * sign * Number(stack);
      }
      if (ch === "=") {
        eqOffset = -1;
        stack = "";
      } else {
        stack = ch;
      }
    } else {
      stack += ch;
    }
  }
  if (numX === 0) {
    return value === 0 ? "Infinite solutions" : "No solution";
  }
  return "x=" + String(value / numX);
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(solveEquation)
    .map((v) => JSON.stringify(v));
}
