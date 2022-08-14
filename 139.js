/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const set = new Set(wordDict);

    const dp = new Array(s.length + 1).fill(false);

    dp[0]  = true;

    for (let i = 1;  i < s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && set.has(s.substring(j, i - j))) {
                dp[i] = true;
            }
        }
    }

    return dp[s.length];
};