/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSubarrays = function(nums) {
    let xrr=0, c=0;
    let mp = new Map();
    mp.set(0,1);
    for(let i=0;i<nums.length;i++){
        xrr ^= nums[i];
        let x = xrr^0;
        c += mp.get(x) || 0;
        mp.set(xrr, (mp.get(xrr)||0)+1);

    }
    return c;
};

//[3,3,1,1,1] 