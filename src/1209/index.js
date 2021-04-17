import { group } from "../utils.js";

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const removeDuplicates = function (s, k) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const top = stack.length === 0 ? ["", 0] : stack[stack.length - 1];
    const [ch, count] = top;
    if (s[i] === ch) {
      top[1] = (count + 1) % k;
      if (top[1] === 0) {
        stack.pop();
      }
    } else {
      stack.push([s[i], 1]);
    }
  }
  return stack.reduce((acc, cur) => {
    const [ch, count] = cur;
    return acc + Array(count).fill(ch).join("");
  }, "");
};

export default function run(input) {
  return group(input.map(JSON.parse), 2).map(([s, k]) =>
    removeDuplicates(s, k)
  );
}
