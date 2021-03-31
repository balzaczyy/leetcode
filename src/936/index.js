import { group } from "../utils.js";

/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
const movesToStamp = function (stamp, target) {
  const hashLeft = new Map();
  const hashRight = new Map();
  for (let i = 1; i < stamp.length; i++) {
    hashLeft.set(stamp.substring(0, i), stamp.substring(i));
    hashRight.set(stamp.substring(i), stamp.substring(0, i));
  }

  const ans = [];
  const q = [[target, 0]];
  while (q.length > 0) {
    if (ans.length >= 10 * target.length) {
      throw new Error("impossible");
    }

    const [s, offset] = q.shift();
    const parts = s.split(stamp);

    let next = 0;
    for (let i = 0; i < parts.length; i++) {
      let v = parts[i];

      if (i < parts.length - 1) {
        ans.unshift(offset + v.length + next);
      }

      if (v.length === 0) {
        next += stamp.length;
        continue;
      }
      let diff = 0;
      if (i > 0) {
        for (let j = Math.min(stamp.length - 1, v.length); j >= 1; j--) {
          const prefix = hashRight.get(v.substring(0, j));
          if (prefix) {
            v = prefix + v;
            diff = -prefix.length;
            break;
          }
        }
      }
      if (i < parts.length - 1) {
        for (
          let j = Math.max(v.length - (stamp.length - 1), 0);
          j <= v.length;
          j++
        ) {
          const suffix = hashLeft.get(v.substring(j));
          if (suffix) {
            v = v + suffix;
            break;
          }
        }
      }
      q.push([v, next + diff]);
      next = next + parts[i].length + stamp.length;
    }
  }
  return ans;
};

export default function run(input) {
  return group(input, 2)
    .map(([stamp, target]) => movesToStamp(stamp, target))
    .map((v) => JSON.stringify(v));
}
