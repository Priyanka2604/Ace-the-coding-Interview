/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    nums.sort( (a, b) => a - b);
    let i = 0, j = 1, maxLen = 0;

    while(j < nums.length){
        if(nums[j] - nums[i] === 1) {
            maxLen = Math.max(maxLen, j - i + 1);
            j++;
        }
        else if(nums[j] - nums[i] === 0) { j++; }
        else { i++; }
    }

    return maxLen;
};