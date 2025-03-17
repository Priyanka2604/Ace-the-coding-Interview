/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    let n = nums.length, actsum = 0;
    let sum = (n*(n+1))/2;
    for(let i=0;i<n;i++){
        actsum += nums[i];
    }
    return sum-actsum;
};