/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length; 

    function getSafeValue(memo, i, j) {
        if (i < 0 || j < 0) {
            return 0;
        }

        return memo[i][j];
    }

  const memo = new Array(obstacleGrid.length)
    .fill(0)
    .map(() => new Array(obstacleGrid[0].length).fill(0));

    if (obstacleGrid[0][0] !== 1) {
        memo[0][0] = 1;
    }


    for (let i = 0; i < obstacleGrid.length; i++) {
        for (let j = 0; j < obstacleGrid[i].length; j++) {
            if (i === 0 && j === 0) {
                continue;
            }

            // 障碍物，此路不通
            if (obstacleGrid[i][j] === 1) {
                continue;
            }
        
            memo[i][j] = getSafeValue(memo, i, j - 1) + getSafeValue(memo, i - 1, j);
        }
    }

    return memo[m - 1][n - 1]
};

uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]])
uniquePathsWithObstacles([[0,1],[0,0]])