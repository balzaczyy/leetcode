import { group } from "../utils.js";

/**
 * @param {number[][]} rects
 */
const Solution = function (rects) {
  console.log(rects);
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function () {
  return [1, 1];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([commands, params]) => {
      const ans = [];
      let obj, values;
      for (let i = 0; i < commands.length; i++) {
        const param = params[i];
        switch (commands[i]) {
          case "Solution":
            values = param[0];
            obj = new Solution(...param);
            break;
          case "pick":
            // noinspection JSUnusedAssignment
            ans.push(obj.pick());
            break;
        }
      }
      // this is not an efficient and reliable verification
      // so please manually check the result to ensure the distribution
      function inSquare(x, y, x1, y1, x2, y2) {
        return x >= x1 && x <= x2 && y >= y1 && y <= y2;
      }
      const freqs = new Map();
      for (let i = 0; i < ans.length; i++) {
        const [x, y] = ans[i];
        for (let j = 0; j < values.length; j++) {
          const [x1, y1, x2, y2] = values[j];
          if (!inSquare(x, y, x1, y1, x2, y2)) {
            return false;
          }
        }
        const k = `${x}:${y}`;
        freqs.set(k, (freqs.get(k) || 0) + 1);
      }
      console.log(freqs);
      let sum = 0;
      freqs.forEach((v) => (sum += v));
      const avg = sum / freqs.size;
      let isOk = true;
      freqs.forEach((v) => {
        if (Math.abs(v - avg) / avg > 0.05) {
          isOk = false;
        }
      });
      return isOk;
    })
    .map(String);
}
