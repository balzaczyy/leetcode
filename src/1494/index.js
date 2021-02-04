import { group } from "../utils.js";

/**
 * @param {number} n
 * @param {number[][]} dependencies
 * @param {number} k
 * @return {number}
 */
const minNumberOfSemesters = function (n, dependencies, k) {
  const ins = [],
    outs = [];
  dependencies.forEach(([a, b]) => {
    if (!ins[b - 1]) {
      ins[b - 1] = new Set();
    }
    ins[b - 1].add(a - 1);
    if (!outs[a - 1]) {
      outs[a - 1] = new Set();
    }
    outs[a - 1].add(b - 1);
  });
  // console.log(ins);

  // calculate depth to detect critical path
  const depths = [];
  function searchDepth(x) {
    if (depths[x] !== undefined) {
      // already calculated
      return depths[x];
    }
    const d = outs[x]?.size || 0;
    if (d === 0) {
      // no direct children
      return 1;
    }
    let max = -1;
    outs[x].forEach((v) => {
      max = Math.max(max, searchDepth(v));
    });
    return max + 1;
  }
  for (let i = 0; i < n; i++) {
    if (depths[i] !== undefined) {
      continue;
    }
    depths[i] = searchDepth(i);
  }
  // console.log(depths);

  // calculate course power, which course opens more courses
  function power(x) {
    if ((outs[x]?.size || 0) === 0) {
      return 0;
    }
    let p = 0;
    outs[x].forEach((v) => {
      const prev = ins[v].size; // must be larger than 0
      p += 1 / prev;
    });
    return p;
  }
  // console.log(Array.from(Array(n).keys()).map(power));

  function compare(a, b) {
    const inLenA = ins[a]?.size || 0;
    const inLenB = ins[b]?.size || 0;
    if (inLenA > 0 && inLenB > 0) {
      return 0;
    }
    if (inLenA === 0 && inLenB === 0) {
      return 0;
    }
    return inLenA - inLenB;
  }
  function compareDepth(a, b) {
    const inLenA = ins[a]?.size || 0;
    const inLenB = ins[b]?.size || 0;
    if (inLenA > 0 && inLenB > 0) {
      return 0;
    }
    if (inLenA === 0 && inLenB === 0) {
      return depths[b] - depths[a];
    }
    return inLenA - inLenB;
  }
  function comparePower(a, b) {
    const inLenA = ins[a]?.size || 0;
    const inLenB = ins[b]?.size || 0;
    if (inLenA > 0 && inLenB > 0) {
      return 0;
    }
    if (inLenA === 0 && inLenB === 0) {
      return power(b) - power(a);
    }
    return inLenA - inLenB;
  }

  let ans = -1;
  const q = Array.from(Array(n).keys());
  function search(depth) {
    if (q.length === 0) {
      if (ans < 0 || depth < ans) {
        ans = depth;
      }
      return;
    }

    q.sort(compare);

    function commit(c) {
      if (outs[c]) {
        outs[c].forEach((v) => {
          ins[v].delete(c);
        });
      }
    }
    function rollback(c) {
      if (outs[c]) {
        outs[c].forEach((v) => {
          ins[v].add(c);
        });
      }
    }

    // pick k courses from q[0..till)
    function pick(candidates, callback) {
      if (
        q.length === 0 || // no more course
        (ins[q[0]]?.size || 0) > 0 || // no available course
        candidates.length === k
      ) {
        // enough course for this semester
        callback(candidates);
        return;
      }

      // try critical path first
      q.sort(compareDepth);
      let c = q.shift();
      pick([...candidates, c], callback);
      q.unshift(c);

      // try power first
      q.sort(comparePower);
      c = q.shift();
      pick([...candidates, c], callback);
      q.unshift(c);
    }

    pick([], (candidates) => {
      if (candidates.length === 0) {
        throw new Error("impossible");
      }
      // console.log(ans, depth, candidates.map(v=>v+1));
      candidates.forEach(commit);
      search(depth + 1);
      candidates.forEach(rollback);
    });
  }

  search(0);
  console.log(ans);
  return ans;
};

export default function run(input) {
  return group(input.map(JSON.parse), 3)
    .map(([n, dependencies, k]) => minNumberOfSemesters(n, dependencies, k))
    .map((v) => JSON.stringify(v));
}
