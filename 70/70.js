/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    // const memo = {};

    // function recurtion(n) {
    //     if (n === 1) {
    //         return 1;
    //     }

    //     if (n === 2) {
    //         return 2;
    //     }

    //     if (!memo[n]) {
    //         memo[n] = recurtion(n - 1) + recurtion(n - 2);
    //     }

    //     return memo[n];
    // }


    // return recurtion(n);

    if (n <= 2) {
        return n;
    }

    let p1 = 0;
    let p2 = 0;
    let p3 = 1;

    for (let i = 1; i <= n; i++) {
        p1 = p2;
        p2 = p3;
        p3 = p1 + p2;
    }

    return p3;
};

climbStairs(3)