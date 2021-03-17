import { group } from "../utils.js";

/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
const Solution = function (radius, x_center, y_center) {
  this.radius = radius;
  this.x_center = x_center;
  this.y_center = y_center;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function () {
  const x = Math.random() * this.radius * 2 + this.x_center - this.radius;
  const y = Math.random() * this.radius * 2 + this.y_center - this.radius;
  const d = Math.sqrt(
    Math.pow(Math.abs(x - this.x_center), 2) +
      Math.pow(Math.abs(y - this.y_center), 2)
  );
  if (d <= this.radius) {
    return [x, y];
  }
  return this.randPoint();
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([commands, params]) => {
      let obj = {};
      for (let i = 0; i < commands.length; i++) {
        const param = params[i];
        switch (commands[i]) {
          case "Solution":
            console.log(param);
            obj = new Solution(...param);
            break;
          case "randPoint":
            console.log(obj.randPoint());
            break;
        }
      }
      return true;
    })
    .map(String);
}
