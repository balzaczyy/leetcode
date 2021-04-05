/**
 * @param {number[]} A
 * @return {boolean}
 */
const isIdealPermutation = function (A) {
  const all = new Set();
  for (let i = 0; i < A.length; i++) {
    all.add(A[i]);
    if (i > 0 && !all.has(i - 1)) {
      return false;
    }
  }
  for (let i = 2; i < A.length; i += 2) {
    if (A[i - 2] > A[i]) {
      return false;
    }
  }
  for (let i = 3; i < A.length; i += 2) {
    if (A[i - 2] > A[i]) {
      return false;
    }
  }
  return true;
};

export default function run(input) {
  return input.map(JSON.parse).map(isIdealPermutation).map(String);
}
