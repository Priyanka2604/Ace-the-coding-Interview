/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let c = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[(i+1)%nums.length]<nums[i]){
            c++;
        }
    }

    if(nums.length<2 || c<2) return true;

    return false;
};