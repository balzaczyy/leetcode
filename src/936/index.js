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

    if (parts.length === 1) {
      return [];
    }

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
      for (let j = Math.min(stamp.length - 1, v.length); j >= 1; j--) {
        const prefix = hashRight.get(v.substring(0, j));
        if (prefix) {
          if (offset + next - prefix.length >= 0) {
            v = prefix + v;
            diff = -prefix.length;
            break;
          }
        }
      }

      if (v.length < stamp.length) {
        let step = -1;
        do {
          step = stamp.indexOf(v, step + 1);
          if (step >= 0) {
            if (
              offset + next - step >= 0 &&
              offset + next - step + stamp.length <= target.length
            ) {
              v = stamp;
              diff = -step;
            }
          }
        } while (step >= 0);
      }

      if (!v.startsWith(stamp)) {
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
      q.push([v, offset + next + diff]);
      next = next + parts[i].length + stamp.length;
    }
  }

  // function encode(stamp, seq, len) {
  //   let s = Array(len).fill("?").join("");
  //   seq.forEach((p) => {
  //     // if (p < 0 || p > len - stamp.length) {
  //     //   throw new Error("impossible");
  //     // }
  //     s = s.substring(0, p) + stamp + s.substring(p + stamp.length);
  //   });
  //   return s;
  // }
  // const s2 = encode(stamp, ans, target.length);
  // if (s2 !== target) {
  //   console.log(target);
  //   console.log(s2);
  //   throw new Error("impossible");
  // }
  return ans;
};

export default function run(input) {
  return group(input, 2)
    .map(([stamp, target]) => movesToStamp(stamp, target))
    .map((v) => JSON.stringify(v));
}
