import { group } from "../utils.js";

/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
const largestNumber = function (cost, target) {
  const cost2 = (() => {
    const cd = cost.map((cost, i) => ({ cost, number: i + 1 }));
    cd.sort((a, b) => {
      if (a.cost === b.cost) {
        return b.number - a.number;
      }
      return a.cost - b.cost;
    });
    return cd.reduce((acc, cur) => {
      if (acc.length === 0 || acc[acc.length - 1].cost !== cur.cost) {
        acc.push(cur);
      }
      return acc;
    }, []);
  })();
  // console.log(cost2);

  function compare(a, b) {
    if (a[0] !== b[0]) {
      throw new Error("impossible");
    }
    for (let i = 9; i >= 1; i--) {
      const d = (a[i] || 0) - (b[i] || 0);
      if (d !== 0) {
        return d;
      }
    }
    return 0;
  }

  const table = [[0]];
  for (let i = 1; i <= target; i++) {
    let combo = [0];
    for (let j = 0; j < cost2.length && cost2[j].cost <= i; j++) {
      const { cost, number } = cost2[j];
      if (!table[i - cost]) continue;

      const len2 = table[i - cost][0] + 1;
      if (len2 > combo[0]) {
        const arr = table[i - cost].slice();
        arr[0]++;
        arr[number] = (arr[number] || 0) + 1;
        combo = arr;
      } else if (len2 < combo[0]) {
        // skip
      } else {
        const arr = table[i - cost].slice();
        arr[0]++;
        arr[number] = (arr[number] || 0) + 1;
        if (compare(arr, combo) > 0) {
          combo = arr;
        }
      }
    }
    if (combo[0] > 0) {
      table[i] = combo;
    }
  }
  // console.log(table);
  const ans = table[target];
  if (!ans) {
    return "0";
  }
  // console.log(ans);
  const s = [];
  for (let i = ans.length - 1; i > 0; i--) {
    for (let j = 0; j < ans[i]; j++) {
      s.push(String(i));
    }
  }
  return s.join("");
};

export default function run(input) {
  return group(input.map(JSON.parse), 2).map(([cost, target]) =>
    largestNumber(cost, target)
  );
}
