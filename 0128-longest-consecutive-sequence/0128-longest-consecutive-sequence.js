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
            let c = 1;
            while(n.has(curr+1)){
                curr += 1;
                c += 1;
            }
            maxLen = Math.max(maxLen, c);
        }
    }

    return maxLen;
};