import { group } from "../utils.js";

/**
 * Initialize your data structure here.
 */
const MyHashMap = function () {
  const seed = 97;
  this.hash = (n) => n % seed;
  this.store = Array(seed);
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const idx = this.hash(key);
  const v = this.store[idx];
  if (v) {
    const found = v.find((v) => v.key === key);
    if (found) {
      found.value = value;
    } else {
      v.push({ key, value });
    }
  } else {
    this.store[idx] = [{ key, value }];
  }
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const idx = this.hash(key);
  const v = this.store[idx];
  if (v) {
    const found = v.find((v) => v.key === key);
    if (found) {
      return found.value;
    }
  }
  return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const idx = this.hash(key);
  const v = this.store[idx];
  if (v) {
    const found = v.findIndex((v) => v.key === key);
    if (found >= 0) {
      v.splice(found, 1);
    }
  }
};

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
            ans.push(obj.put(...param));
            break;
          case "get":
            ans.push(obj.get(...param));
            break;
          case "remove":
            ans.push(obj.remove(...param));
            break;
        }
      }
      return ans;
    })
    .map((v) => JSON.stringify(v));
}
