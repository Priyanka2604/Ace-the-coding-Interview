/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
    const MOD = 1000000007n;
    
    const power = (a,b) => {
        let res = 1n;
        a = BigInt(a);
        b = BigInt(b);
        while (b>0) {
            if(b % 2n === 1n) res = (res*a)% MOD;
            a = (a*a)%MOD;
            b = b/2n;
        }
        return res;
    }

    const evencoun = Math.floor((n+1)/2);
    const oddcoun = Math.floor(n/2);
    let ans = (power(5, evencoun)*power(4, oddcoun))%MOD;
    return Number(ans);
};