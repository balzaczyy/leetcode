import { group } from "../utils.js";

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function (pushed, popped) {
  const stack = [];
  let pos = 0;
  for (const v of pushed) {
    if (v === popped[pos]) {
      pos++;
      while (stack.length > 0 && stack[stack.length - 1] === popped[pos]) {
        stack.pop();
        pos++;
      }
    } else {
      stack.push(v);
    }
  }
  while (stack.length > 0) {
    if (stack.pop() !== popped[pos]) {
      return false;
    }
    pos++;
  }
  return pos === popped.length;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([pushed, popped]) => validateStackSequences(pushed, popped))
    .map(String);
}
