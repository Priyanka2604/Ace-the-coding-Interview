/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let n = nums.length, c = 0, maxCount = 0;
    for(let i=0; i<n; i++){
        if(nums[i]===1){
            c++
        } else {
            c = 0;
        }

        if(c>maxCount) maxCount = c;
    }

    return maxCount;
};