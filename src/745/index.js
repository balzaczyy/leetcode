import { group } from "../utils.js";

/**
 * @param {string[]} words
 */
const WordFilter = function (words) {
  /**
   * @param {any} table
   * @param {string} word
   * @param {number} id
   */
  const index = (table, word, id) => {
    const base = "a".charCodeAt(0);
    let t = table;
    for (let i = 0; i < word.length; i++) {
      if (!t.next) {
        t.next = [];
      }
      const n = word.charCodeAt(i) - base;
      if (!t.next[n]) {
        t.next[n] = {};
      }
      t = t.next[n];

      if (!t.list) {
        t.list = [id];
      } else {
        t.list.push(id);
      }
    }
  };
  const pt = {},
    st = {};
  for (let i = 0; i < words.length; i++) {
    index(pt, words[i], i);
    index(st, words[i].split("").reverse().join(""), i);
  }
  this.prefixTable = pt;
  this.suffixTable = st;
  this.lookup = (table, keyword) => {
    const base = "a".charCodeAt(0);
    let t = table;
    for (let i = 0; i < keyword.length && t; i++) {
      if (!t || !t.next) {
        return [];
      }
      if (!t || !t.next) {
        break;
      }
      const n = keyword.charCodeAt(i) - base;
      t = t.next[n];
    }
    return t ? t.list : [];
  };
};

/**
 * @param {string} prefix
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function (prefix, suffix) {
  const a = this.lookup(this.prefixTable, prefix);
  const b = this.lookup(this.suffixTable, suffix.split("").reverse().join(""));
  let i = a.length - 1,
    j = b.length - 1;
  while (i >= 0 && j >= 0) {
    if (a[i] === b[j]) {
      return a[i];
    } else if (a[i] < b[j]) {
      j--;
    } else {
      i--;
    }
  }
  return -1;
};

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([commands, params]) => {
      const ans = [];
      let obj = {};
      for (let i = 0; i < commands.length; i++) {
        const param = params[i];
        switch (commands[i]) {
          case "WordFilter":
            obj = new WordFilter(...param);
            ans.push(null);
            break;
          case "f":
            ans.push(obj.f(...param));
            break;
        }
      }
      return ans;
    })
    .map((v) => JSON.stringify(v));
}
