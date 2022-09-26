/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const visted = new Array(grid.length)
    .fill(0)
    .map(() => new Array(grid[0].length).fill(0));

  function toVisted(i, j) {
    if (grid[i][j] === '0') {
      return;
    }

    if (visted[i][j] === 1) {
      return;
    }

    visted[i][j] = 1;

    for (const [x, y] of direction) {
      const xx = i + x;
      const yy = y + j;

      if (xx < grid.length && xx >= 0 && yy >= 0 && yy < grid[0].length) {
        toVisted(xx, yy);
      }
    }
  }

  let nums = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1" && visted[i][j] === 0) {
        nums++;
        toVisted(i, j);
      }
    }
  }

  return nums;
};

numIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
]);
