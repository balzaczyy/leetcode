/**
 * @param {string} s
 * @return {string[]}
 */
const ambiguousCoordinates = function (s) {
  const isNumber = (v) => {
    const n = Number(v);
    return !isNaN(n) && String(n) === v;
  };
  const inferNumbers = (v) => {
    const ret = [];
    if (isNumber(v)) {
      ret.push(v);
    }
    for (let i = 1; i < v.length; i++) {
      const parts = v.split("");
      parts.splice(i, 0, ".");
      const s = parts.join("");
      if (isNumber(s)) {
        ret.push(s);
      }
    }
    return ret;
  };
  const ans = [];
  s = s.substring(1, s.length - 1);
  for (let i = 1; i < s.length; i++) {
    const a = s.substring(0, i);
    const b = s.substring(i);
    const ca = inferNumbers(a);
    const cb = inferNumbers(b);
    ca.forEach((v1) => {
      cb.forEach((v2) => {
        ans.push(`(${v1}, ${v2})`);
      });
    });
  }
  return ans;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(ambiguousCoordinates)
    .map((v) => JSON.stringify(v));
}
