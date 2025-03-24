/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let sum=0, c=0;
    let mp = new Map();
    mp.set(0,1);
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
        let rem = sum-k;
        if(mp.has(rem)){
            c += mp.get(rem);
        }
        
        if(mp.has(sum)){
            mp.set(sum, mp.get(sum)+1);
        } else{
            mp.set(sum,1);
        }
    }
    return c;
};