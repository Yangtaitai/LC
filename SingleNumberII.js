// Given an array of integers, every element appears three times except for one. Find that single one.
// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

/**
 * @param {number[]} nums
 * @return {number}
 */
 
 // similar to the Single Number I problem and use map.
var singleNumber = function(nums) {
    var map = {};
    for(var i = 0; i < nums.length; i++){
        if(nums[i] in map) {
            map[nums[i]] = true;
        }else{
            map[nums[i]] = false;
        }
    }
    for(var i = 0; i < nums.length; i++){
        if(map[nums[i]] === false) return nums[i];
    }
}
