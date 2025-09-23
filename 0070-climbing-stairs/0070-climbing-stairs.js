/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = new Array(n+1).fill(-1);

    function fibo(n){
        if(n<=1) return 1;
        if(dp[n]!==-1) return dp[n];
        return dp[n] = fibo(n-2) + fibo(n-1);
    }
    
    return fibo(n);
};