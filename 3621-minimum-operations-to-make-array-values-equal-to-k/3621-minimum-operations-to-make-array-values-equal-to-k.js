/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    nums.sort();
    let hs = new Set();
    for(let i=0;i<nums.length;i++){
        if(nums[i]<k) return -1;
        if(nums[i]>k){
            hs.add(nums[i]);
        }
    }

    return hs.size;
    
};