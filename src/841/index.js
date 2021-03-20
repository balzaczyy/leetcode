/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function (rooms) {
  const visited = new Set();
  const q = [0];
  visited.add(0);
  const len = rooms.length;
  while (q.length > 0 && visited.size < len) {
    const t = q.shift();
    for (let i = 0; i < rooms[t].length; i++) {
      const next = rooms[t][i];
      if (!visited.has(next)) {
        visited.add(next);
        q.push(next);
      }
    }
  }
  return visited.size === len;
};

export default function run(input) {
  return input.map(JSON.parse).map(canVisitAllRooms).map(String);
}
