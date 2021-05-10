/**
 * @param {number[]} target
 * @return {boolean}
 */
const isPossible = function (target) {
  if (target.length === 1) {
    return target[0] === 1;
  }

  target.sort((a, b) => b - a);
  const n = target.length;
  while (target[0] > 1) {
    for (let i = 0; i < n; i++) {
      for (let j = 1; j < n; j++) {
        target[i] -= target[(i + j) % n];
        if (target[i] < 1) {
          return false;
        }
      }
    }
  }
  return true;
};

export default function run(input) {
  return input.map(JSON.parse).map(isPossible).map(String);
}
