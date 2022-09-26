/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity; let maxProfit = -Infinity;


    for (const price of prices) {
        // 求出最小值
        minPrice = Math.min(price, minPrice);

        maxProfit = Math.max(price - minPrice, maxProfit);
    }


    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]))