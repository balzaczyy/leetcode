/**
 * @param {number[][]} courses
 * @return {number}
 */
const scheduleCourse = function (courses) {
  return 0;
};

export default function run(input) {
  return input.map(JSON.parse).map(scheduleCourse).map(String);
}
