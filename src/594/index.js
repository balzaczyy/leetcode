/**
 * @param {number[]} nums
 * @return {number}
 */
const findLHS = function (nums) {
  const cache = new Map();
  const count = (t) =>
    nums.reduce((acc, cur) => (cur === t ? acc + 1 : acc), 0);
  const cachedCount = (t) => {
    let v = cache.get(t);
    if (v === undefined) {
      v = count(t);
      cache.set(t, v);
    }
    return v;
  };
  const combo = (x, y) => (x > 0 && y > 0 ? x + y : 0);

  let ans = 0;
  nums.forEach((v) => {
    const c = cachedCount(v);
    const p = cachedCount(v + 1);
    const m = cachedCount(v - 1);
    ans = Math.max(ans, Math.max(combo(c, m), combo(c, p)));
  });
  // console.log(cache);
  return ans;
};

export default function run(input) {
  return input.map(JSON.parse).map(findLHS).map(String);
}
