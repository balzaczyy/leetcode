/**
 * @param {string} S
 * @return {number}
 */
const scoreOfParentheses = function (S) {
  const stack = [];
  for (let i = 0; i < S.length; i++) {
    switch (S[i]) {
      case "(":
        stack.push(0);
        break;
      case ")":
        if (stack[stack.length - 1] === 0) {
          stack[stack.length - 1] = 1;
        } else {
          let sum = 0;
          while (stack[stack.length - 1] > 0) {
            sum += stack.pop();
            if (stack.length === 0) {
              throw new Error("bad string");
            }
          }
          stack[stack.length - 1] = sum * 2;
        }
        break;
    }
  }
  return stack.reduce((acc, cur) => acc + cur);
};

export default function run(input) {
  return input.map(JSON.parse).map(scoreOfParentheses).map(String);
}
