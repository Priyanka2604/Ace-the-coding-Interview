/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let dp = new Array(n+1).fill(-1);
    return fibnacci(n);

    function fibnacci(n){
        if(n<=1) return n;
        if(dp[n]!==-1) return dp[n];
        return dp[n] = fib(n-1) + fib(n-2);
    }
};