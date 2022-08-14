var coinChange = function (coins, amount) {
	let dp = new Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for (let i = 1; i <= amount; i++) {
		for (let coin of coins) {
			if (i - coin < 0) continue; // 当前硬币比面值大
			dp[i] = Math.min(dp[i], 1 + dp[i - coin]); //dp[i]在第一个循环里就求出来了，dp[i]= Math.min(Infinity,1+dp[i-coins[0]])
		}
	}

	return dp[amount] === Infinity ? -1 : dp[amount];
};

coinChange([1, 2, 5], 11)