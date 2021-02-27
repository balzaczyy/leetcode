import { group } from "../utils.js";

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function (pushed, popped) {
  return true;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([pushed, popped]) => validateStackSequences(pushed, popped))
    .map(String);
}
