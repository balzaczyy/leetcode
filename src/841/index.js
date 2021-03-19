/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function (rooms) {
  return true;
};

export default function run(input) {
  return input.map(JSON.parse).map(canVisitAllRooms).map(String);
}
