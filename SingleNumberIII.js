// Given an array of numbers nums, in which exactly two elements appear only once and 
// all the other elements appear exactly twice. Find the two elements that appear only once.
// For example:
// Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var map = {};
    var result = [];
    for(var i = 0; i < nums.length; i++){
        if(nums[i] in map){
            map[nums[i]] = 2;
        }else{
            map[nums[i]] = 1;
        }
    }
    for(var i = 0; i < nums.length; i++){
        if(map[nums[i]] === 1) result.push(nums[i]);
    }
    return result;
}
