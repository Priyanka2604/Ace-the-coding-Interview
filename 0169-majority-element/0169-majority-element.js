/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const mp = new Map();

    for(let num of nums){
        mp.set(num, (mp.get(num) || 0) + 1);
    }

    let max = 0;


    for(let [key, value] of mp.entries()){
        if(value > nums.length/2){
            max = key;
            break
        }
    }

    return max;
};