/**
 * @param {number[]} target
 * @return {boolean}
 */
const isPossible = function (target) {
  target.sort((a, b) => b - a);
  while (target[0] > 1) {
    let top = target.shift();
    if (target.length === 0) {
      return false;
    }
    const sum = target.reduce((acc, cur) => acc + cur);
    if (top <= sum) {
      return false;
    }
    top = top % sum;
    if (top < 1 && sum !== 1) {
      return false;
    }
    target.push(top);
    target.sort((a, b) => b - a);
  }
  return true;
};

export default function run(input) {
  return input.map(JSON.parse).map(isPossible).map(String);
}
