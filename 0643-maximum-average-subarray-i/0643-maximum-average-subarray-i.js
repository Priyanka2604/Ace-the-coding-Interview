/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let subArrSum = 0;

    for(let i = 0; i < k; i++){
        subArrSum += nums[i];
    }

    let maxSum = subArrSum;
    for(let i = k; i < nums.length; i++){
        subArrSum += nums[i] - nums[i-k];
        maxSum = Math.max(maxSum, subArrSum);
    }

    return maxSum/k;
};