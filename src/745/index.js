import { group } from "../utils.js";

/**
 * @param {string[]} words
 */
const WordFilter = function (words) {};

/**
 * @param {string} prefix
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function (prefix, suffix) {};

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
