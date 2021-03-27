/**
 * @param {number} n
 * @return {boolean}
 */
const reorderedPowerOf2 = function (n) {
  const id = (n) => {
    const counts = Array(10).fill(0);
    while (n > 0) {
      const d = n % 10;
      counts[d]++;
      n = (n - d) / 10;
    }
    return counts.join("-");
  };
  const keys = new Set();
  const limit = Math.min(1000000000, n * 10);
  for (let i = 1; i <= limit; i = i << 1) {
    keys.add(id(i));
  }
  // console.log(keys);
  return keys.has(id(n));
};

export default function run(input) {
  return input.map(JSON.parse).map(reorderedPowerOf2).map(String);
}
