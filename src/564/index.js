/**
 * @param {string} n
 * @return {string}
 */
const nearestPalindromic = function (n) {
  if (n.length === 1) {
    const n1 = Number(n);
    return String(n1 - 1);
  }

  const len = Math.floor(n.length / 2);
  const a = Number(n.substring(0, len));
  const b = Number(n.substring(n.length - len));
  const hasMid = n.length >= 3 && n.length % 2 === 1;
  const m = hasMid ? Number(n[len]) : -1;

  const reverse = (n) => {
    let r = 0;
    while (n > 0) {
      r = r * 10 + (n % 10);
      n = Math.floor(n / 10);
    }
    return r;
  };

  if (!hasMid) {
    return String(a) + String(reverse(a));
  }

  const floor = Math.pow(10, len);
  const r = reverse(a);
  const ans = [{ a, b: r, m, diff: Math.abs(r - b), step: 0 }];

  // try mid+1
  if (m < 9) {
    ans.push({ a, b: r, m: m + 1, diff: Math.abs(r + floor - b), step: 1 });
  } else {
    const r1 = reverse(a + 1);
    ans.push({
      a: a + 1,
      b: r1,
      m: 0,
      diff: Math.abs(r1 + floor - b),
      step: 1,
    });
  }

  // try mid-1
  if (m > 0) {
    ans.push({ a, b: r, m: m - 1, diff: Math.abs(r - floor - b), step: -1 });
  } else if (a > 1) {
    const r1 = reverse(a - 1);
    ans.push({
      a: a - 1,
      b: r1,
      m: 9,
      diff: Math.abs(r1 - floor - b),
      step: -1,
    });
  }

  ans.sort((a, b) => {
    const d = a.diff - b.diff;
    if (d !== 0) {
      return d;
    }

    return a.step - b.step;
  });
  return String(ans[0].a) + String(ans[0].m) + String(ans[0].b);
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(nearestPalindromic)
    .map((v) => JSON.stringify(v));
}
