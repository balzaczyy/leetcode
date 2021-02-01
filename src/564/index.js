/**
 * @param {string} n
 * @return {string}
 */
const nearestPalindromic = function (n) {
  if (n.length <= 2) {
    const d = Number(n);
    if (d <= 11) {
      return String(d - 1);
    }
  }

  const len = Math.floor(n.length / 2);
  const a = Number(n.substring(0, len));
  const b = Number(n.substring(n.length - len));
  const seed = Number(n.substring(0, Math.ceil(n.length / 2)));
  const hasMid = n.length % 2 === 1;

  const reverse = (n) => {
    let r = 0,
      t = n;
    while (t > 0) {
      r = r * 10 + (t % 10);
      t = Math.floor(t / 10);
    }
    return r;
  };

  const r = reverse(a);
  const ans = [];
  if (r !== b) {
    ans.push({
      value: String(seed) + String(r),
      diff: Math.abs(r - b),
    });
  }
  if (r >= b) {
    const numDigits = String(seed - 1).length;
    // if (numDigits < len) {
    //   return 'oh no';
    // }
    //TODO 偶数位坍缩 设置mid=9
    const floor = Math.pow(10, len);
    const r1 = reverse(
      hasMid && numDigits > len ? Math.floor((seed - 1) / 10) : seed - 1
    );
    ans.push({
      value: String(seed - 1) + String(r1),
      diff: b + floor - r1,
    });
  }
  if (r <= b) {
    const numDigits = String(seed + 1).length;
    if (numDigits > len) {
      return "oh no";
    }
    const floor = Math.pow(10, len);
    const r1 = reverse(hasMid ? Math.floor((seed + 1) / 10) : seed + 1);
    ans.push({
      value: String(seed + 1) + String(r1),
      diff: r1 + floor - b,
    });
  }
  ans.sort((a, b) => {
    const d = a.diff - b.diff;
    if (d !== 0) {
      return d;
    }
    return a.value.localeCompare(b.value);
  });
  return ans[0].value;

  // const pa = String(a);
  // const pb = String(reverse(a));
  // const padding = n.length - len - pb.length;
  // if (padding < 0) {
  //   throw new Error("impossible");
  // }
  // return padding === 0 ? pa + pb : pa + Array().fill("0").join("") + pb;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(nearestPalindromic)
    .map((v) => JSON.stringify(v));
}
