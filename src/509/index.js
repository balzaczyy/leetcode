/**
 * @param {number} n
 * @return {number}
 */
const fib = function (n) {
  let i = 0,
    j = 1;
  for (let k = 0; k < n; k++) {
    const t = i + j;
    i = j;
    j = t;
  }
  return i;
};

export default function run(input) {
  return input.map(Number).map(fib).map(String);
}
