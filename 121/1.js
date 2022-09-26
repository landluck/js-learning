/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {


    // 只可以买卖一次，所以需要找到价格最低的那一天，然后后置位价格最高的那一天卖出


    let minPrice = Infinity;
    let maxProfit = -Infinity;


    for (const price of prices) {
        // 找出最小价格
        minPrice = Math.min(price, minPrice);

        // 找出当前价格和最小价格的差与当前最大利益的对吧
        maxProfit = Math.max(price - minPrice, maxProfit);

    }

    return maxProfit;
};

maxProfit([7,1,5,3,6,4]);