/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const st = new Set();
    for(let i=0; i<nums.length; i++){
        if(st.has(nums[i])) return true;
        st.add(nums[i]);
        if(st.size > k) st.delete(nums[i-k]);
    }

    return false;
};