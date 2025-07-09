/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let ans = BigInt(`0b${a}`) + BigInt(`0b${b}`);
    return ans.toString(2);
};