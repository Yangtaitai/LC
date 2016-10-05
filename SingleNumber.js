// Given an array of integers, every element appears twice except for one. Find that single one.
// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

/**
 * @param {number[]} nums
 * @return {number}
 */
 
 // use map to store nums[i] and appears times.
var singleNumber = function(nums) {
    var len = nums.length;
    var map = {};
    for(var i = 0; i < len; i++){
        if(nums[i] in map) {
            map[nums[i]] = 2;
        }else{
            map[nums[i]] = 1;
        }
    }
    for(var i = 0; i < len; i++){
        if(map[nums[i]] === 1) return nums[i];
    }
}

// bit manipulation
var singleNumber = function(nums) {
    var len = nums.length;
    var result = 0;
    for(var i = 0; i < len; i++){
        result ^= nums[i];
    }
    return result;
}

