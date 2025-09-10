/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, dp = {}) {
    if(n<=1) return n;
    if(dp[n]) return dp[n];
    return dp[n] = fib(n-1, dp) + fib(n-2, dp);
};