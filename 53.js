/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums || nums.length == 0) {
    return 0;
  }

  // max = Math.max(f(n - 1) + n, f(n-1));

  const dp = [nums[0]];
  let res = -Infinity;

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);

    res = Math.max(res, dp[i]);
  }

  // f(i)=max{f(i−1)+nums[i],nums[i]}
  console.log(res);
  return dp[nums.length - 1];
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
