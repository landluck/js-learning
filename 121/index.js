/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 时间：O(n * n)
    // 空间：O(1)
    // let res = 0;

    // for (let i = 0; i < prices.length; i++) {

    //     for (let j = i; j < prices.length; j++) {
    //         res = Math.max(res, prices[j] - prices[i])
    //     }
    // }

    // return res;



    // let minPrice = Infinity; let maxProfit = 0;

    // for (const price of prices) {
    //     minPrice = Math.min(price, minPrice);

    //     maxProfit = Math.max(maxProfit, price - minPrice);
    // }


    // return maxProfit;


    let n = prices.length;


    let sell = 0;
    let buy = -prices[0];

    for (let i = 0; i < n; i++) {
        sell = Math.max(sell, buy + prices[i]);
        buy = Math.max(buy, -prices[i])
    }

    return sell;
};

// 时间：O(n * n)
// 空间：O(1)

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([2,4,1]))
console.log(maxProfit([7,6,4,3,1]))