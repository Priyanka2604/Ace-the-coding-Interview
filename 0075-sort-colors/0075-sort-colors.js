/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let r=0, w=0, b = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){ r++;}
        else if(nums[i]===1){ w++; }
        else{ b++; }
    }

    for(let i=0;i<r;i++){
        nums[i] = 0;
    }

    for(let i=r;i<(r+w);i++){
        nums[i] = 1;
    }

    for(let i=(r+w);i<nums.length;i++){
        nums[i] = 2;
    }
};