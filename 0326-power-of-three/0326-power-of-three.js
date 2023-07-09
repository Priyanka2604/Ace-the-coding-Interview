/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n==1) return true;
    else if (n%3!=0 || n==0) return false;
    else return isPowerOfThree(n/3);
    
};