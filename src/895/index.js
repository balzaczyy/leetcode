import { group } from "../utils.js";

const FreqStack = function () {
  this.entries = [];
  this.hash = new Map();
  this.nextOffset = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function (x) {
  const ent = this.hash.get(x);
  if (ent) {
    ent.count++;
    ent.offsets.unshift(this.nextOffset);
  } else {
    const next = {
      value: x,
      count: 1,
      offsets: [this.nextOffset],
    };
    this.hash.set(x, next);
    this.entries.push(next);
  }
  this.entries.sort((a, b) => {
    if (a.count !== b.count) {
      return b.count - a.count;
    }
    return b.offsets[0] - a.offsets[0];
  });
  this.nextOffset++;
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  const ent = this.entries[0];
  ent.count--;
  ent.offsets.shift();
  if (ent.offsets.length === 0) {
    this.hash.delete(ent.value);
    this.entries.shift();
  }
  // re-sort
  this.entries.sort((a, b) => {
    if (a.count !== b.count) {
      return b.count - a.count;
    }
    return b.offsets[0] - a.offsets[0];
  });
  return ent.value;
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
