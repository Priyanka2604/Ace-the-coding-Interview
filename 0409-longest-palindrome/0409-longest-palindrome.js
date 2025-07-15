/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if(s.length<=1) return s.length;
    let mp = {};

    for(const i of s){
        mp[i] = (mp[i] || 0) + 1;
    }

    let c = 0;
    for(const x of Object.values(mp)){
        c += x%2===0 ? x : x-1;
    }

    return c < s.length ? c+1 : c;
};