/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const memo = {};


    function recurtion(n) {
        if (n === 1) {
            return 1;
        }

        if (n === 2) {
            return 2;
        }

        if (!memo[n]) {
            memo[n] = recurtion(n - 1) + recurtion(n - 2);

        }

        return memo[n];
    }


    return recurtion(n);
};

console.log(climbStairs(3));