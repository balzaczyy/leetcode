import { group } from "../utils.js";

const FreqStack = function () {};

/**
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function (x) {};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  return 0;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 */

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([commands, params]) => {
      const ans = [];
      let obj = {};
      for (let i = 0; i < commands.length; i++) {
        const param = params[i];
        switch (commands[i]) {
          case "FreqStack":
            obj = new FreqStack(...param);
            ans.push(null);
            break;
          case "push":
            ans.push(obj.push(...param));
            break;
          case "pop":
            ans.push(obj.pop());
            break;
        }
      }
      return ans;
    })
    .map((v) => JSON.stringify(v));
}
