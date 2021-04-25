import { group } from "../utils.js";

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
const criticalConnections = function (n, connections) {
  const edges = new Map();
  for (let i = 0; i < n; i++) {
    edges.set(i, []);
  }
  for (const conn of connections) {
    const [from, to] = conn;
    edges.get(from).push(to);
    edges.get(to).push(from);
  }

  const ans = [];
  const q = [];
  const visited = new Map();
  q.push({ id: 0 });
  visited.set(0, 0);
  while (q.length > 0) {
    const cur = q[q.length - 1];
    const { id, next } = cur;
    const nextId = cur.next !== undefined ? next + 1 : 0;
    cur.next = nextId;
    const candidates = edges.get(id);
    if (nextId < candidates.length) {
      const target = candidates[nextId];
      if (visited.has(target)) {
        if (visited.get(cur.id) - visited.get(target) > 1) {
          // loop detected
          if (cur.back === undefined) {
            cur.back = target;
          } else if (visited.get(target) < visited.get(cur.back)) {
            cur.back = target;
          }
        } // else ignore
      } else {
        q.push({ id: target });
        visited.set(target, q.length - 1);
      }
    } else {
      q.pop();
      if (q.length > 0) {
        if (cur.back === undefined) {
          ans.push([q[q.length - 1].id, cur.id]);
        } else if (cur.back !== q[q.length - 1].id) {
          q[q.length - 1].back = cur.back;
        }
      }
    }
  }

  return ans;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([n, connections]) => criticalConnections(n, connections))
    .map((v) => JSON.stringify(v));
}
