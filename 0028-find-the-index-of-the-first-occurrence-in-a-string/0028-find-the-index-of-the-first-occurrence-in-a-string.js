/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let i=0, n = needle.length;

    while(i <= haystack.length - n) {
        if (haystack.substring(i, i + n) === needle) return i;
        i++;
    }
    return -1;
};