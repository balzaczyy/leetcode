/**
 * @param {string} text
 * @return {number}
 */
const maxRepOpt1 = function (text) {
  // console.log(text);
  const amap = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  const freqs = Array(26).fill(0);
  for (const ch of text) {
    freqs[amap[ch] - 1]++;
  }

  const groups = [];
  let from = 0;
  for (let i = 1; i < text.length; i++) {
    if (text[i] !== text[from]) {
      groups.push({
        ch: text[from],
        count: i - from,
      });
      from = i;
    }
  }
  groups.push({
    ch: text[from],
    count: text.length - from,
  });

  for (let i = 0; i < groups.length; i++) {
    const g = groups[i];
    if (freqs)
      if (g.count > 1) {
      }
  }

  return ans;
};

export default function run(input) {
  return input.map(JSON.parse).map(maxRepOpt1).map(String);
}
