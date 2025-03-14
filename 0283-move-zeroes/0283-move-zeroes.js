/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let n = nums.length, c = 0, i=0, j=0;
    let arr = new Array(n);
    for(i=0,j=0;i<n;i++){
        if(nums[i]===0){
            c++;
        } else{
            arr[j] = nums[i];
            j++;
        }
    }

    while(c-->0){
        arr[j++] = 0
    }

    for(let i=0;i<n;i++){
        nums[i] = arr[i];
    }
};