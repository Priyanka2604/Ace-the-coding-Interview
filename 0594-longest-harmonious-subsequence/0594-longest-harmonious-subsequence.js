/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const mp = new Map();
    for(const num of nums){
        mp.set(num, (mp.get(num) || 0) + 1);
    }

    let maxLen = 0;
    for(let [num, freq] of mp.entries()){
        if(mp.has(num+1)){
            maxLen = Math.max(maxLen, freq + mp.get(num+1));
        }
    }

    return maxLen;
};