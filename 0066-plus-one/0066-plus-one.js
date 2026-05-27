/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let convertStr = BigInt(digits.join('').toString());
    convertStr += 1n;
    let arr = Array.from(convertStr.toString())
    let result = []
    for(let ele of arr){
        result.push(parseInt(ele))
    }
    return result;
};