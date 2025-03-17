/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let mp = new Map();
    for(let i=0; i<nums.length; i++) {
        mp.set(nums[i], (mp.get(nums[i]) || 0)+1);
    }

    for(const [key, val] of mp) {
        if(val === 1){
            return parseInt(key);
        }
    }

    return -1;
};