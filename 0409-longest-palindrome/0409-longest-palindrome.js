/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if(s.length<=1) return s.length;
    let mp = new Map();

    for(const i in s){
        mp.set(s[i], (mp.get(s[i]) || 0)+1);
    }

    let c = 0;
    for(const x of mp.values()){
        if(x%2===0){
            c += x;
        } else {
            c += x-1;
        }
    }

    return c < s.length ? c+1 : c;
};