/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    if(arr.length===0){
        return arr;
    }

    let newa = [arr.length]
    for(i=0; i< arr.length; i++){
        newa[i] = fn(arr[i], i)
    }

    return newa;
};