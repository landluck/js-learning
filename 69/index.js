/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    let l = 0, r = x;

    while(l < r) {
        const mid = Math.floor((l + r) / 2);

        const value = mid * mid;

        if (value === x) {
            return mid;
        } else if (value > x) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return l - 1;
};

mySqrt(4);