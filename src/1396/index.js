import { group } from "../utils.js";

var UndergroundSystem = function () {};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([commands, params]) => {
      const ans = [];
      let obj;
      for (let i = 0; i < commands.length; i++) {
        const param = params[i];
        switch (commands[i]) {
          case "UndergroundSystem":
            obj = new UndergroundSystem();
            ans.push(null);
            break;
          case "checkIn":
            // noinspection JSUnusedAssignment
            obj.checkIn(...param);
            ans.push(null);
            break;
          case "checkOut":
            // noinspection JSUnusedAssignment
            obj.checkOut(...param);
            ans.push(null);
            break;
          case "getAverageTime":
            ans.push(obj.getAverageTime(...param));
            break;
          default:
            // noinspection JSUnusedAssignment
            ans.push(obj[commands[i]](...param));
            break;
        }
      }
      return ans;
    })
    .map((v) => JSON.stringify(v));
}
