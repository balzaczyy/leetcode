export function group(arr, n) {
  const res = [];
  for (let i = 0; i < arr.length; i += n) {
    const g = [];
    for (let j = 0; j < n; j++) {
      g.push(arr[i + j]);
    }
    res.push(g);
  }
  return res;
}
