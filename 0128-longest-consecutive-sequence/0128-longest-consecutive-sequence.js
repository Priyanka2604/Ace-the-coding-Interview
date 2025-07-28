/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length<=0) return 0;
    let c = 1, max = 1;
    nums.sort((a,b) => a - b);

    for(let i=0; i<nums.length; i++){
        if(nums[i] - nums[i-1] === 1){
            c += 1;
            max = Math.max(max, c);
        }
        else if(nums[i] === nums[i-1]) continue;
        else {
            c = 1;
        }
    }

    return max;
};