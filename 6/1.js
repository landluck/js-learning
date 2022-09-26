/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, r) {
    if (r === 1 || s.length === 1) {
        return s;
    }

    // 构造一个数组
    const memo = new Array(r).fill(0).map(() => []);

    // 计算变换的的周期
    const t = r + r - 2;


    for (let i = 0,x = 0; i < s.length; i++) {
        memo[x].push(s[i]);

        // 
        if (i % t < r - 1) {
            x++
        } else {
            x--;
        }
    }

    const result = [];

    for (const arr of memo) {
        for (const s of arr) {
            result.push(s);
        }
    }

    return result.join('');
};

convert('PAYPALISHIRING', 3);