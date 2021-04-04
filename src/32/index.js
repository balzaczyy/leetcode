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
    const res = [0];
    const max = () => {
      let ans = 0;
      res.forEach((v) => {
        ans = Math.max(ans, v);
      });
      return ans;
    };
    for (let i = offset; i < s.length; i++) {
      if (s[i] === "(") {
        stack.push("(");
        res.push(0);
      } else if (stack.length === 0 || stack[stack.length - 1] !== "(") {
        return Math.max(max(), search(s, i + 1));
      } else {
        stack.pop();
        res.pop();
        res[res.length - 1] += 2;
      }
    }
    return max();
  }
  return search(s, 0);
};

export default function run(input) {
  return input.map(JSON.parse).map(longestValidParentheses).map(String);
}
