import { group } from "../utils.js";

/**
 * Initialize your data structure here.
 */
const MyHashMap = function () {};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([commands, params]) => {
      const ans = [];
      let obj = {};
      for (let i = 0; i < commands.length; i++) {
        const param = params[i];
        switch (commands[i]) {
          case "MyHashMap":
            obj = new MyHashMap(...param);
            ans.push(null);
            break;
          case "put":
            ans.push(obj.put());
            break;
          case "get":
            ans.push(obj.get());
            break;
          case "remove":
            ans.push(obj.remove());
            break;
        }
      }
      return ans;
    })
    .map((v) => JSON.stringify(v));
}
