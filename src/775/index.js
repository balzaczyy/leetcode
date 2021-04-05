import { group } from "../utils.js";

/**
 * @param {number[]} A
 * @return {boolean}
 */
const isIdealPermutation = function (A) {
  return false;
};

export default function run(input) {
  return input.map(JSON.parse).map(isIdealPermutation).map(String);
}
