/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  function getSafeValue(memo, i, j) {
    if (i < 0 || j < 0) {
      return Infinity;
    }

    return memo[i][j];
  }

  // f(i, j) = Math.min(f(i - 1, j), f(i, j-1))

  const m = grid.length;
  const n = grid[0].length;

  const memo = new Array(m).fill(0).map(() => new Array(n).fill(0));
  memo[0][0] = grid[0][0];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        continue;
      }

      memo[i][j] =
        Math.min(getSafeValue(memo, i - 1, j), getSafeValue(memo, i, j - 1)) +
        grid[i][j];
    }
  }

  return memo[m - 1][n - 1]
};

minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]);
