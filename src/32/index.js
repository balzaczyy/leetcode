/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (s) {
  /**
   * @param {string} s
   * @param {number} offset
   * @return number
   */
  function search(s, offset = 0) {
    offset = s.indexOf("(", offset);
    if (offset < 0) {
      return 0;
    }

    const stack = [];
    let res = 0;
    for (let i = offset; i < s.length; i++) {
      if (s[i] === "(") {
        stack.push("(");
      } else if (stack.length === 0 || stack[stack.length - 1] !== "(") {
        return Math.max(res, search(s, i + 1));
      } else {
        stack.pop();
        res += 2;
      }
    }
    return res;
  }
  return search(s, 0);
};

export default function run(input) {
  return input.map(JSON.parse).map(longestValidParentheses).map(String);
}
