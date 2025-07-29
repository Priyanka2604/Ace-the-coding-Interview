/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let n = new Set(nums);
    let maxLen = 0;

    for(let num of n){
        if(!n.has(num-1)){
            let curr = num;
            let len = 1;
            while(n.has(curr+1)){
                curr += 1;
                len += 1;
            }
            maxLen = Math.max(maxLen, len);
        }
    }

    return maxLen;
};