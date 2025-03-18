/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let l=0, m=0, h = nums.length-1;
    while(m<=h){
        if(nums[m]===0){
            let temp = nums[l];
            nums[l] = nums[m];
            nums[m] = temp;
            l++, m++;
        } else if(nums[m]===1){
            m++;
        } else if(nums[m] === 2){
            let temp1 = nums[h];
            nums[h] = nums[m];
            nums[m] = temp1;
            h--;
        }
    }
};