/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    nums.sort( (a, b) => a - b);
    let j = 0, maxLen = 0;

    for(let i = 0; i < nums.length; i++) {
        while(nums[i] - nums[j] > 1) j++;
        if(nums[i] - nums[j] === 1) {
            maxLen = Math.max(maxLen, i - j + 1);
        }
    }

    return maxLen;
};