import { group } from "../utils.js";
import { Iterator } from "../284/index.js";

/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function (radius, x_center, y_center) {};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function () {
  return [0, 0];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([commands, params]) => {
      const ans = [];
      let obj = {};
      for (let i = 0; i < commands.length; i++) {
        const param = params[i];
        switch (commands[i]) {
          case "Solution":
            obj = new Solution(...param);
            ans.push(null);
            break;
          case "randPoint":
            ans.push(obj.randPoint());
            break;
        }
      }
      return ans;
    })
    .map((v) => JSON.stringify(v));
}
