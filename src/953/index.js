import { group } from "../utils.js";

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = function (words, order) {
  if (words.length <= 1) {
    return true;
  }
  const rlt = new Map();
  for (let i = 0; i < order.length; i++) {
    rlt.set(order[i], i);
  }
  function compare(a, b) {
    for (let j = 0; j < a.length && j < b.length; j++) {
      const diff = rlt.get(a) - rlt.get(b);
      if (diff < 0) {
        return -1;
      }
      if (diff > 0) {
        return 1;
      }
    }
    return a.length > b.length ? 1 : 0;
  }
  for (let i = 0; i < words.length - 1; i++) {
    const res = compare(words[i], words[i + 1]);
    if (res > 0) {
      return false;
    }
  }
  return true;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([words, order]) => isAlienSorted(words, order))
    .map(String);
}
