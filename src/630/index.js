/**
 * @param {number[][]} courses
 * @return {number}
 */
const scheduleCourse = function (courses) {
  courses.sort((a, b) => a[1] - b[1]);
  let totalCost = 0;
  const q = [];
  for (let i = 0; i < courses.length; i++) {
    const [cost, last] = courses[i];
    if (totalCost + cost <= last) {
      totalCost += cost;
      q.push(courses[i]);
      q.sort((a, b) => a[0] - b[0]);
    } else if (q.length > 0 && cost < q[q.length - 1][0]) {
      const swap = q.pop();
      totalCost -= swap[0];
      totalCost += cost;
      q.push(courses[i]);
      q.sort((a, b) => a[0] - b[0]);
    }
  }
  return q.length;
};

export default function run(input) {
  return input.map(JSON.parse).map(scheduleCourse).map(String);
}
