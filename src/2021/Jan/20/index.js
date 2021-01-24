/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = [];

  for (const ch of s) {
    switch (ch) {
      case "(":
      case "{":
      case "[":
        stack.push(ch);
        break;
      case ")":
        if (stack.pop() !== "(") {
          return false;
        }
        break;
      case "}":
        if (stack.pop() !== "{") {
          return false;
        }
        break;
      case "]":
        if (stack.pop() !== "[") {
          return false;
        }
        break;
    }
  }
  return stack.length === 0;
};

export default function run(input) {
  return input.map(isValid).map((v) => String(v));
}
