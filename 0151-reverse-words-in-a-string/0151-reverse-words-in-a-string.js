/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let a = s.trim().split(/\s+/);
    a.reverse();
    return a.join(" ");
};