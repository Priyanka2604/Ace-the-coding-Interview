/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i=0, j=nums.length-1, ans = nums.length;
    ans = lowerBound(i, j, nums, target, ans);
    return ans;
};

var lowerBound = function(i, j, nums, x, ans){
    let m = Math.floor((i+j)/2);
    if(i>j) return ans;
    if(nums[m]>=x){
        ans = m;
        j = m-1;
        return lowerBound(i, j, nums, x, ans);
    }
    else if(nums[m]<x){
        i = m+1;
        return lowerBound(i, j, nums, x, ans);
    }
}