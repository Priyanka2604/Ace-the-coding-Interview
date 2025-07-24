// Sliding window with Recursion 
/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    if(s.length < 2) return "";

    const obj = {};

    for(const i of s) obj[i] = i;

    for(let i = 0; i < s.length; i++){
        const item = s[i];

        if(obj[item.toUpperCase()] && obj[item.toLowerCase()]) continue;

        const left = longestNiceSubstring(s.substring(0, i));
        const right = longestNiceSubstring(s.substring(i + 1));

        return left.length >= right.length ? left : right;

    }

    return s;
};