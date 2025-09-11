/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n===0) return n;
    
    let prev2 = 0;
    let prev = 1;
    for(let i=2; i <= n ;i++){
        let curr_i = prev2 + prev;
        prev2 = prev;
        prev = curr_i;
    }
    return prev;
};