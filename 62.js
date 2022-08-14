/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {

    function getSafeValue(memo, i, j) {
        if (i < 0 || j < 0) {
            return 0;
        }

        return memo[i][j];
    }

    // f(i, j) = f(i, j - 1) + f(i - 1, j);

    const memo = new Array(m).fill(0).map(() => new Array(n).fill(0))

    memo[0][0] = 1;


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                continue;
            }
            memo[i][j] = getSafeValue(memo, i, j - 1) + getSafeValue(memo, i - 1, j);
        }
    }

    return memo[m - 1][n - 1];

};

uniquePaths(3, 7)