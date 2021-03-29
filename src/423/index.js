/**
 * @param {string} s
 * @return {string}
 */
const originalDigits = function (s) {
  const fingerprints = [
    ["z", "zero", 0],
    ["w", "two", 2],
    ["u", "four", 4],
    ["x", "six", 6],
    ["g", "eight", 8],
    ["o", "one", 1],
    ["t", "three", 3],
    ["f", "five", 5],
    ["s", "seven", 7],
    ["i", "nine", 9],
  ];
  const counts = new Map();
  for (const ch of s) {
    counts.set(ch, 1 + (counts.get(ch) || 0));
  }
  // console.log(counts);
  const numbers = Array(10).fill(0);
  for (const fp of fingerprints) {
    const [ch, word, number] = fp;
    if (counts.has(ch)) {
      const diff = counts.get(ch);
      for (const v of word) {
        if (!counts.has(v)) {
          throw new Error("impossible");
        }
        const n = counts.get(v);
        if (n > diff) {
          counts.set(v, counts.get(v) - diff);
        } else {
          counts.delete(v);
        }
      }
      numbers[number] += diff;
    }
  }
  const ans = [];
  numbers.forEach((v, i) => {
    if (v > 0) {
      ans.push(Array(v).fill(String(i)).join(""));
    }
  });
  return ans.join("");
};

export default function run(input) {
  return input.map(originalDigits);
}
