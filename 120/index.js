var minimumTotal = function(triangle) {
    // let res = Infinity;

    // function recursion(value, level, index) {
    //     if (level === triangle.length) {
    //         res = Math.min(res, value);
    //         return;
    //     }


    //     for (let i = index; i <= Math.min(index + 1, triangle[level].length - 1); i++) {
    //         recursion(value + triangle[level][i], level + 1, i);
    //     }
    // }

    // recursion(0, 0, 0);

    // return res;



//     2
//     3 4
//    6 5 7
//   4 1 8 3



// 4 1 8 3 的路径为 1
// 6 5 7 的路径为  2
// 3 4 的路径为  4
// 2 的路径为  8 
// 所以 i,j 越大，路径越小，所以 当前 i,j 的路径总数为 i + 1,  i + 1. j + 1
// 所以 i，j 的路径和为 f(i, j) = min(f(i + 1, j) + (i, j), f(i + 1, j + 1) + (i, j));


// 1. 用 dfs 实现


    // function dfs(i, j) {
    //     // 退出条件
    //     if (i === triangle.length - 1) {
    //         return triangle[i][j];
    //     }



    //     return Math.min(dfs(i + 1, j) + triangle[i][j], dfs(i + 1, j + 1) + triangle[i][j]);
    // }

    // const res = dfs(0, 0);

    // return res;


    // const memo = {};
    
    // function dfs(i, j) {
    //     // 退出条件
    //     if (i === triangle.length - 1) {
    //         return triangle[i][j];
    //     }

    //     if (!memo[`${i}${j}`])  {
    //         memo[`${i}${j}`] = Math.min(dfs(i + 1, j) + triangle[i][j], dfs(i + 1, j + 1) + triangle[i][j])
    //     }



    //     return memo[`${i}${j}`];
    // }

    // const res = dfs(0, 0);

    // return res;

    function isSafeIndex(index, len) {
        return index >= 0 & index < len;
    }

    function getSafeValue(arr, i, j, defaultValue) {
        if (isSafeIndex(i, arr.length) && isSafeIndex(j, arr[0].length)) {
            return arr[i][j]
        }

        return defaultValue;
    }

    const memo = new Array(triangle.length).fill(0);

    for (let i = triangle.length - 1; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            const v1 = (memo[j] || 0) + triangle[i][j];
            const v2 = (memo[j + 1] || 0) + triangle[i][j];


            memo[j] = Math.min(v1, v2);
        }
    }

    return memo[0];
};

minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]);