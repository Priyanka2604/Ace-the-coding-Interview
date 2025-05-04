/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let i=0, j=nums.length-1;
    let floo=-1, cei=-1;
    floo = floorr(i, j, nums, target, floo);
    cei = ceil(i, j, nums, target, cei);
    return [floo,cei];
};

var floorr = function(i, j, nums, x, ans){
    let m = Math.floor((i+j)/2);
    if(i>j) return ans;
    if(nums[m]===x){
        ans=m;
        j = m-1;
        return floorr(i, j, nums, x, ans);
    }
    else if(nums[m]<x){
        i = m+1;
        return floorr(i, j, nums, x, ans);
    }
    else if(nums[m]>x){
        j = m-1;
        return floorr(i, j, nums, x, ans);
    }

    return ans;
}

var ceil = function(i, j, nums, x, ans){
    let m = Math.floor((i+j)/2);
    if(i>j) return ans;
    if(nums[m]===x){
        ans=m;
        i = m+1;
        return ceil(i, j, nums, x, ans);
    }
    else if(nums[m]>x){
        j = m-1;
        return ceil(i, j, nums, x, ans);
    }
    else if(nums[m]<x){
        i = m+1;
        return ceil(i, j, nums, x, ans);
    }

    return ans;
}