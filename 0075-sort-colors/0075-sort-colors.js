/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let r=0, w=0, b = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){ r++;}
        else if(nums[i]===1){ w++; }
    }

    for(let i=0;i<nums.length;i++){
        if(i<r){ nums[i] = 0; }
        else if(i>=r && i<(r+w)){ nums[i] = 1; }
        else{ nums[i] = 2; }
    }
};