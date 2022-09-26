/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const BASE_VALUE = Math.pow(2, 31);
    const MAX_VALUE = BASE_VALUE - 1;
    const MIN_VALUE = -BASE_VALUE;

    let prev = 0;
    let flag = x > 0;

    x = Math.abs(x);

    while(x !== 0) {
        const val = x % 10;

        prev = prev * 10 + val;

        if (flag && prev > MAX_VALUE || !flag && prev < MIN_VALUE) {
            return 0;
        }
        
        const n = x / 10;

        x = Math.floor(n);
    }

    
    return prev;
};

reverse(-123)