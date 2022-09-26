/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    const arr1 = num1.split('');
    const arr2 = num2.split('');
    
    const memo = new Array(arr1.length + arr2.length).fill(0);

    for (let i = arr1.length - 1; i >= 0; i++) {
        for (let j = arr2.length - 1; j >= 0; j--){
            // 进位值的位置
            const p1 = i + j;
            // 此轮计算值的位置
            const p2 = i + j + 1;

            const val = arr1[i] * arr2[j] + memo[p2];

            memo[p1] += Math.floor(val / 10);
            memo[p2] = val % 10;
        }
    }

    if (memo[0] === 0) {
        memo.shift();
    }


    return memo.join('');
};


multiply("123", "123");
