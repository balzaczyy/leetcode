/**
 * @param {string} n
 * @return {string}
 */
const nearestPalindromic = function (n) {
  const len = Math.ceil(n.length / 2);
  let a = Number(n.substring(0, len));
  let b = Number(n.substring(len));
  const hasMid = n.length % 2 === 1;
  console.log(n, a, b);

  const reverse = (n) => {
    let r = 0,
      t = n,
      i = 0;
    while (t > 0) {
      r = r * 10 + (t % 10);
      t = Math.floor(t / 10);
      i++;
    }
    if (len + i > n.length) {
      // exclude mid
      return reverse(Math.floor(n / 10));
    }
    return r;
  };

  // const padding = (s, size) => {
  //   if (s.length > size + 1) {
  //     throw new Error('impossible');
  //   } else if (s.length === size + 1) {
  //     return s.substring(1);
  //   } else if (s.length === size) {
  //     return s;
  //   }
  //   return Array(size - s.length).fill('0').join('') + s;
  // }

  const floor = Math.pow(10, len);
  const r = reverse(a);
  if (r < b) {
    // try add 1
    const d = Math.abs(r - b);
    const r1 = reverse(a + 1);
    const d1 = Math.abs(r1 + floor - b);
    if (d1 < d) {
      a++;
    }
  } else if (r > b) {
    const d = Math.abs(r - b);
    const r1 = reverse(a - 1);
    const d1 = Math.abs(b + floor - r1);
    if (d1 < d) {
      a--;
    }
  } else {
    return "oh no";
  }

  const pa = String(a);
  const pb = String(reverse(a));
  const padding = n.length - len - pb.length;
  if (padding < 0) {
    throw new Error("impossible");
  }
  return padding === 0 ? pa + pb : pa + Array().fill("0").join("") + pb;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(nearestPalindromic)
    .map((v) => JSON.stringify(v));
}
