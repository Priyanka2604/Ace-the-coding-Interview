/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let i=0, j=nums.length-1;
    let ind = bst(i,j,nums,target);
    return ind;
};

var bst = function(i, j, nums, target) {
    let m = Math.floor((i+j)/2);
    if(nums[m]===target) return m;
    
    if(i>j) return -1;

    if(nums[m]<target){
        i = m+1;
        return bst(i,j, nums, target);
    }

    if(nums[m]>target){
        j = m-1;
        return bst(i,j, nums, target);
    }
}