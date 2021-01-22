import { group } from "../utils.js";

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  const dict1 = new Map();
  for (let ch of word1) {
    const n = dict1.get(ch) || 0;
    dict1.set(ch, n + 1);
  }
  const dict2 = new Map();
  for (let ch of word2) {
    if (!dict1.has(ch)) {
      return false;
    }
    const n = dict2.get(ch) || 0;
    dict2.set(ch, n + 1);
  }

  const freq1 = [];
  for (let ent of dict1) {
    const [, v] = ent;
    freq1.push(v);
  }
  const freq2 = [];
  for (let ent of dict2) {
    freq2.push(ent[1]);
  }
  if (freq1.length !== freq2.length) {
    return false;
  }

  freq1.sort((a, b) => a - b);
  freq2.sort((a, b) => a - b);
  for (let i = 0; i < freq1.length; i++) {
    if (freq1[i] !== freq2[i]) {
      return false;
    }
  }

  return true;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([word1, word2]) => closeStrings(word1, word2))
    .map(String);
}
