/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let prev2 = 0;
    let prev = 1;
    let curr = 0;
    for(let i=0; i<n; i++){
        curr = prev2 + prev;
        prev2 = prev;
        prev = curr;
    }

    return prev;
};