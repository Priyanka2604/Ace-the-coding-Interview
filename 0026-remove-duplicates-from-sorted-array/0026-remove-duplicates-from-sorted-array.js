/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const hs = new Set(nums);
    uarr = Array.from(hs);
    for(let i=0;i<uarr.length;i++){
        nums[i] = uarr[i];
    }
    return uarr.length;
};