/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {

    // [1] 
    // [1, 3]
    // [4, 5, 1]
    // [2, 1, 1]
    // [1, 1]


    const l = grid.length;
    
    let res = Infinity;


    function dfs(value, i, j) {
        // 某个方向超出，丢弃这条路
        if (i === l || j === l) {
            return;
        }

        // 走到最后
        if (i === l -1 && j === l -1 ) {
            res = Math.min(res, value + grid[i][j]);
            return;
        }

        dfs(value + grid[i][j], i, j + 1)

        dfs(value + grid[i][j], i + 1, j)
    }
    
    dfs(0, 0, 0)

    return res;
};  


minPathSum([[1,2,3],[4,5,6]])